
import React from 'react';
import heroImg from '../assets/hero.jpg';
import burgerImg from '../assets/burger.jpg';
import pizzaImg from '../assets/pizza.jpg';
import saladImg from '../assets/salad.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="position-relative mb-4"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '18px',
          minHeight: '260px',
          overflow: 'hidden',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1,
          }}
        />
        <div
          className="position-relative text-white text-center"
          style={{
            zIndex: 2,
            padding: '60px 20px 40px 20px',
          }}
        >
          <h1 className="display-5 fw-bold mb-3" style={{ textShadow: '1px 1px 8px #222' }}>
            Welcome to Burger Lab
          </h1>
          <p className="lead mb-4" style={{ textShadow: '1px 1px 6px #111' }}>
            Experience delicious food, quick online ordering, and warm ambiance.
          </p>
          <Link to="/menu" className="btn btn-warning fs-5 px-5 shadow-sm">
            View Menu
          </Link>
        </div>
      </div>

      {/* Quick Info */}
      <div className="row text-center g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="bg-light rounded p-3 h-100 border">
            <h6 className="mb-2">Opening Hours</h6>
            <p className="mb-0">Mon-Sun: 10:00am - 10:00pm</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="bg-light rounded p-3 h-100 border">
            <h6 className="mb-2">Location</h6>
            <p className="mb-0"> Barelias, Beqaa</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="bg-light rounded p-3 h-100 border">
            <h6 className="mb-2">Contact</h6>
            <p className="mb-0">+ 961 78 756 454</p>
          </div>
        </div>
      </div>

      {/* Featured Dishes */}
      <div>
        <h2 className="mb-3 text-center">Try Our Popular Dishes</h2>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img src={burgerImg} alt="Burger" className="card-img-top" style={{ height: 180, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Classic Burger</h5>
                <p className="card-text">Juicy beef patty, fresh veggies, and our signature sauce.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img src={pizzaImg} alt="Pizza" className="card-img-top" style={{ height: 180, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Italian Pizza</h5>
                <p className="card-text">Stone-baked crust, tangy tomato sauce, and fresh toppings.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img src={saladImg} alt="Salad" className="card-img-top" style={{ height: 180, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Garden Salad</h5>
                <p className="card-text">Crisp greens, ripe tomatoes, cucumbers, and house vinaigrette.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/menu" className="btn btn-outline-primary">
            Explore Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;