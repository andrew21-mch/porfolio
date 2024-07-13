import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/ContactForm.css";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form,
            process.env.REACT_APP_EMAIL_USER_ID
        )
            .then(
                (result) => {
                    toast.success("Email sent successfully!");
                    console.log("Email sent successfully!", result.text);
                },
                (error) => {
                    toast.error("Error sending email. Please try again.");
                    console.error("Error sending email:", error.text);
                }
            );

        form.reset();
    };

    return (
        <div className="contact-form">
            <ToastContainer />
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
