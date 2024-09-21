import React, { useState } from 'react';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: 'Select One...',
        message: '',
        checkbox: false
    });

    const [resultMessage, setResultMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setResultMessage('Sending....');
            const formDataObj = new FormData();
            formDataObj.append('access_key', '5c06d213-fd06-4af3-8c03-b70d89dfea17');
            formDataObj.append('firstName', formData.firstName);
            formDataObj.append('lastName', formData.lastName);
            formDataObj.append('email', formData.email);
            formDataObj.append('phoneNumber', formData.phoneNumber);
            formDataObj.append('topic', formData.topic);
            formDataObj.append('message', formData.message);
            formDataObj.append('checkbox', formData.checkbox);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataObj
            });
            const res = await response.json();
            if (res.success) {
                setResultMessage(res.message);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    topic: 'Select One...',
                    message: '',
                    checkbox: false
                });
            } else {
                setResultMessage('Failed to submit form. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResultMessage('Failed to submit form. Please try again later.');
        }
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
                </p>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="firstName"
                            id="first-name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="lastName"
                            id="last-name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="tel"
                            className="contact--input text-md"
                            name="phoneNumber"
                            id="phone-number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select
                        id="choose-topic"
                        className="contact--input text-md"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                    >
                        <option disabled>Select One...</option>
                        <option>Mobile</option>
                        <option>Front End</option>
                        <option>Back End</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        checked={formData.checkbox}
                        onChange={handleChange}
                    />
                    <span className="text-sm">I accept the terms</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
                </div>
            </form>
            {resultMessage && <p>{resultMessage}</p>}
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </section>
    );
}
