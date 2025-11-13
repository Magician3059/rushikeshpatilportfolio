import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service123",           // Your Service ID
        "template_og15ljj",    // Your Template ID
        form.current,
        "a2beTU8JSPbynRmU2"  // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-5 text-light bg-dark">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-warning">Get in Touch</h2>

        {/* Contact Info */}
        <motion.div
          className="glass-card p-4 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
          whileHover={{ rotateX: 5, rotateY: -5 }}
        >
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919960553059" className="text-light">
              +91 9960553059
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:rushikeshpatil@gmail.com" className="text-light">
              rushikeshpatil@gmail.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> Vikramnagar, Ichalkaranji , Kolhapur , Maharastra , India
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          className="glass-card p-4 mx-auto"
          style={{ maxWidth: "600px" }}
          whileHover={{ scale: 1.02 }}
          onSubmit={sendEmail}
        >
          <div className="mb-3">
           
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Send Message
          </button>
          {status && <p className="mt-3 text-success">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
