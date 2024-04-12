import React from "react";
import "./styles/ContactForm.css";


const ContactForm = () => {
    return (
        <div className="contact-form">
            <h3>Contact Me</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
    
export default ContactForm;
