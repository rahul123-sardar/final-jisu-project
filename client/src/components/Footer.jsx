import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white text-center py-4">
        {/* Mission Statement */}
        <div className="mb-3">
          <h5>About Clean City</h5>
          <p>
            Our mission is to create a cleaner and greener city for everyone. Join us in making a difference!
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-3">
          <h5>Quick Links</h5>
          <a href="/" className="text-white mx-2">Home</a>
          <a href="/about" className="text-white mx-2">About</a>
          <a href="/contact" className="text-white mx-2">Contact</a>
          <a href="/complaint" className="text-white mx-2">Complaint</a>
          <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a>
        </div>

        {/* Contact Information */}
        <div className="mb-3">
          <h5>Contact Us</h5>
          <p>Email: support@cleancity.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Clean Street, Green City, India</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-3">
          <h5>Follow Us</h5>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p>&copy; {new Date().getFullYear()} Clean City. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;