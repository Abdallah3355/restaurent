import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <span>© {new Date().getFullYear()} Restaurant. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;