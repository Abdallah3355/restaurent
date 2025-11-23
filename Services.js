import React from 'react';

function Services() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 0' }}>
      <h1 className="text-center mb-4" style={{ color: '#ffbe33', fontWeight: 700 }}>
        Our Services
      </h1>
      <div style={{
        background: "#191919",
        borderRadius: "14px",
        padding: "28px 26px",
        border: "1px solid #232323",
        color: "#fff",
        fontSize: "1.14rem",
        lineHeight: 1.7,
        boxShadow: "0 2px 12px #000b"
      }}>
        <p>Burger Lab offers a focused menu of delicious, freshly-made burgers along with sides and drinks.</p>
        <ul style={{ paddingLeft: 18, marginTop: 16 }}>
          <li style={{ marginBottom: 10 }}>
            Easy Online Orders – Order your favorites online anytime, anywhere.
          </li>
          <li style={{ marginBottom: 10 }}>
            Dine-in & Takeaway – Enjoy our clean and cozy space or grab your meal to go.
          </li>
          <li style={{ marginBottom: 10 }}>
            Order Tracking – Know exactly when your food is ready or on the way.
          </li>
          <li>
            Friendly Staff – Our team is dedicated to making your visit enjoyable and professional.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;