#  "clientId": '6532c0fda478df001876f824',
#             "secret": 'd0b44d14ff01a0b11b48183fca1736',
from django.http import JsonResponse
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.payment_initiation_recipient_create_request import PaymentInitiationRecipientCreateRequest
from plaid.model.payment_initiation_address import PaymentInitiationAddress
from plaid.model.payment_initiation_payment_create_request import PaymentInitiationPaymentCreateRequest
from plaid.model.payment_amount import PaymentAmount
from plaid.model.payment_amount_currency import PaymentAmountCurrency
from plaid.model.products import Products
from plaid.model.country_code import CountryCode
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.api import plaid_api
import plaid
import time
import json
from django.shortcuts import render


PLAID_CLIENT_ID = '6532c0fda478df001876f824'
PLAID_SECRET = 'd0b44d14ff01a0b11b48183fca1736'
PLAID_REDIRECT_URI = 'https://127.0.0.1:8000/'
PLAID_PRODUCTS = ["transactions"]
PLAID_COUNTRY_CODES = ["US"]

configuration = plaid.Configuration(
    host=plaid.Environment.Sandbox,
    api_key={
        'clientId': PLAID_CLIENT_ID,
        'secret': PLAID_SECRET,
        'plaidVersion': '2020-09-14'
    }
)

api_client = plaid.ApiClient(configuration)
client = plaid_api.PlaidApi(api_client)

products = [Products(product) for product in PLAID_PRODUCTS]


def plaid_link_token_create(request):
    try:
        link_token_request = LinkTokenCreateRequest(
            products=products,
            client_name="Plaid Quickstart",
            country_codes=[CountryCode(code) for code in PLAID_COUNTRY_CODES],
            language='en',
            user=LinkTokenCreateRequestUser(
                client_user_id=str(time.time())
            )
        )
        if PLAID_REDIRECT_URI:
            link_token_request.redirect_uri = PLAID_REDIRECT_URI
        link_token_response = client.link_token_create(link_token_request)
        return JsonResponse(link_token_response.to_dict())
    except plaid.ApiException as e:
        return JsonResponse(json.loads(e.body))

def exchange_public_token_for_access_token(request):
    try:
        public_token = request.POST.get('public_token')
        exchange_request = plaid.ItemPublicTokenExchangeRequest(public_token=public_token)
        exchange_response = client.item_public_token_exchange(exchange_request)
        access_token = exchange_response['access_token']
        # Now that you have the access token, you can use it to fetch transactions
        # For simplicity, I'm just returning the access token as JSON response
        return JsonResponse({'access_token': access_token})
    except plaid.ApiException as e:
        return JsonResponse(json.loads(e.body))
def fetch_transactions(request):
    try:
        access_token = request.POST.get('access_token')
        # Set up Plaid API client
        configuration = plaid.Configuration(
            host=plaid.Environment.Sandbox,
            api_key={
                'clientId': PLAID_CLIENT_ID,
                'secret': PLAID_SECRET,
                'plaidVersion': '2020-09-14'
            }
        )
        api_client = plaid.ApiClient(configuration)
        client = plaid_api.PlaidApi(api_client)

        # Fetch transactions using access token
        start_date = '2023-01-01'  # Example start date
        end_date = '2024-01-01'  # Example end date
        request = TransactionsGetRequest(
            access_token=access_token,
            start_date=start_date,
            end_date=end_date
        )
        response = client.transactions_get(request)

        # Return transactions as JSON response
        return JsonResponse(response.to_dict())
    except plaid.ApiException as e:
        return JsonResponse(json.loads(e.body))
def plaid_link_view(request):
    return render(request, 'index.html')