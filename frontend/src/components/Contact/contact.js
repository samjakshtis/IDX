import React, { useState } from 'react';
import './contac.scss';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                // Optionally, you can reset the form fields here
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.error('Failed to submit form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
        console.log(name)
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Calendly Scheduling Section */}
            <div className="Scheduling">
                <h2>Schedule a Time with Me</h2>
                <iframe
                    title="Calendly Scheduling Page"
                    src="https://calendly.com/sam-jakshtis/30min"
                    style={{ width: '100%', height: '800px', border: 'none' }}
                ></iframe>
            </div>
            {/* Contact Me Section */}
            <div className='Contact'>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;

