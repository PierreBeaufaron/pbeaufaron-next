"use client";
import React from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { toast } from 'react-hot-toast';

const ContactForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        const sendingToast = toast.loading("Sending...");

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        toast.dismiss(sendingToast);

        if (res.ok) {
            toast.success("Message sent!");
            form.reset();
        } else {
            toast.error("Error sending the message..");
        }
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Steve Milner" required data-error="Please enter your Name" />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="hello@websitename.com" required data-error="Please enter your Email" />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required data-error="Please Write your Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Me Message <i><RiMailLine size={15} /></i>
                                    </button>
                                    <div id="msgSubmit" className="hidden"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm