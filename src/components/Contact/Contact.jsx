import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import './contact.css';  // Import the custom CSS file

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bolgonxa", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div id="contact" name="Contact" className="contact-container">
      <h1 className="contact-title">Contact me</h1>
      <span className="contact-description">Please fill out the form below to contact me</span>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <h1 className="form-title">Send Your Message</h1>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              {...register("name", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain alphabets",
                },
              })}
              className="form-input"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="form-input"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              {...register("message", { required: "This field is required" })}
              className="form-input"
              id="message"
              name="message"
              placeholder="Enter your Query"
            />
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>
          <button type="submit" className="form-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
