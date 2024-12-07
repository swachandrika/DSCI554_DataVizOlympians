import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <span>© 2028 Olympics - All rights reserved.</span>
        <nav className="mt-2">
          <a href="#contact" className="text-white mx-2">Contact Us</a>
          <a href="#privacy" className="text-white mx-2">Privacy Policy</a>
          <a href="#terms" className="text-white mx-2">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;