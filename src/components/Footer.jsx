import React from "react";

function Footer() {
  return (
    <footer className="text-center text-light py-3 bg-dark mt-5">
      <p className="mb-0">
        © {new Date().getFullYear()} <strong>Rushikesh Patil</strong> | Built with React & Framer Motion
      </p>
    </footer>
  );
}

export default Footer;
