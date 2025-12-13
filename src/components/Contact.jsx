import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Spline from "@splinetool/react-spline";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service123",
        "template_og15ljj",
        form.current,
        "a2beTU8JSPbynRmU2"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-5 text-light bg-dark">
      <div className="container">
        <h2 className="fw-bold mb-5 text-warning text-center">
          Get in Touch
        </h2>

        <div className="row align-items-center justify-content-center g-5">

          {/* LEFT — ROBOT SPLINE */}
          <div className="col-lg-5 d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                height: "500px",              
                // borderRadius: "20px",
                 overflow: "visible",
                 position: "relative", // required for stacking
                // background: "rgba(255,255,255,0.03)",
              }}
            >
              <Spline scene="https://prod.spline.design/qWougliBT85bnyUu/scene.splinecode" />
            </motion.div>
          </div>

          {/* RIGHT — CONTACT DETAILS + FORM */}
          <div className="col-lg-6 col-md-10">

            {/* Contact Info */}
            <motion.div
              className="glass-card p-4 mb-4"
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
                <a
                  href="mailto:rushikeshpatil@gmail.com"
                  className="text-light"
                >
                  rushikeshpatil@gmail.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Vikramnagar, Ichalkaranji, Kolhapur,
                Maharashtra, India
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={form}
              className="glass-card p-4"
              whileHover={{ scale: 1.02 }}
              onSubmit={sendEmail}
            >
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
                />
              </div>

              <button type="submit" className="btn btn-warning w-100">
                Send Message
              </button>

              {status && (
                <p className="mt-3 text-success text-center">
                  {status}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
