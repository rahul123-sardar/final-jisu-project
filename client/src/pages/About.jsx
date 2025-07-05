import React from 'react';

const About = (props) => {
  return (
    <>
      <div
        style={{
          backgroundSize: 'cover', // Ensure the image covers the entire background
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          minHeight: '100vh', // Full viewport height
          padding: '20px',
          color: '#f8f9fa', // Light text color for better contrast
        }}
      >
       <h1 style={{ color: 'black',textDecoration:'underline' }}>About Clean City Initiative</h1>
       {/* Yellow heading */}
        <p style={{ color: 'black' }}>
          Our mission is to create a cleaner and greener city for everyone. Join us in making a difference!
        </p>
        <hr style={{ borderColor: 'black' }} /> {/* Line after heading */}

        

        
          <h2 style={{ color: 'black' , textDecoration: 'underline'}}>Our Goals</h2>{/* Green heading */}
        
        <ul>
          <li style={{ color: 'black' }}>Reduce waste and promote recycling.</li>
          <li style={{ color: 'black' }}>Plant more trees and increase green spaces.</li>
          <li style={{ color: 'black' }}>Encourage community participation in cleanliness drives.</li>
        </ul>

        <u>
          <h2 style={{ color: 'black',textDecoration:'underline'  }}>What People Say</h2> {/* Green heading */}
        </u>
        <blockquote style={{ color: 'black' }}>
          "The clean city initiative has transformed our neighborhood. It's inspiring to see everyone come together for a
          common cause." - {props.name}, {props.city}
        </blockquote>

        <h2 style={{ color: 'black',textDecoration:'underline'  }}>Get Involved</h2> {/* Yellow heading */}
        <p style={{ color: 'black' }}>
          Join us in making our city cleaner and greener. Sign up for our next cleanliness drive!
        </p>
        <button
          style={{
            backgroundColor: '#007bff',
            color: '#ffffff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => alert('Thank you for joining!')}
        >
          Join Now
        </button>

        <h2 style={{ color: 'red' }}>Contact Us</h2> {/* Yellow heading */}
        <p style={{ color: 'black' }}>Email: clean.city@example.com</p>
        <p style={{ color: 'black' }}>Phone: +91 12345 67890</p>

        <h2 style={{ color: 'red' }}>Follow Us</h2> {/* Yellow heading */}
        <p style={{ color: 'black' }}>Stay updated with our latest initiatives and events.</p>

        <h2 style={{ color: 'red' }}>Our Locations</h2> {/* Yellow heading */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.30698201801!2d88.36661277445768!3d22.679613379415596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c5c4ed06f59%3A0x5bd8a392aab98605!2s64%2C%20Nil%20Ratan%20Adhikari%20Rd%2C%20Kamarhati%2C%20Agarpara%2C%20Panihati%2C%20West%20Bengal%20700058!5e0!3m2!1sen!2sin!4v1751214638627!5m2!1sen!2sin"
          height="300"
          style={{ border: 0, width: '100%' }}
          allowFullScreen=""
          loading="lazy"
          title="Clean City Locations"
        ></iframe>
      </div>
    </>
  );
};

export default About;