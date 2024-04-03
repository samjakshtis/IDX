import React, { useState } from 'react';
import './contac.scss'

const ContactPage = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setemail] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setemail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Message:', message);
        // You can perform further actions like sending the form data to a server here
        //https://calendly.com/sam-jakshtis/30min
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
                        <label htmlFor="name">Email:</label>
                        <input
                            type="text"
                            id="name"
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
