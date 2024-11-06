"use client";


import { useState, useEffect } from 'react';
import Link from 'next/link';
import './style.css';
import { NAME } from "./constants.js";
import './fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome
import Image from 'next/image';



export default function Page() {
  const [prevScrollPos, setPrevScrollPos] = useState(typeof window !== 'undefined' ? window.scrollY : 0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
 const [showOverlay, setShowOverlay] = useState({
  catheryn: false,
  jimmy: false
 })

 const toggleOverlay = (person) => {
  setShowOverlay((prev) => ({
    ...prev,
    [person]: !prev[person],
  }));
 };
  return (
    <>
      <header>
        <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
          <ul>
            <li><Link href="#introduction">Home</Link></li>
            <li><Link href="#aboutMe">About Us</Link></li>
            <li><Link href="#ourServices">Our Services</Link></li>
            <li><Link href="#contactUs">Contact Us</Link></li>
          </ul>
        </div>
        <div className="navbar-smallscreen">
          <label className="hamburger-menu">
            <input type="checkbox" />
          </label>
          <aside className="sidebar">
            <nav className="navbar-hamburger">
              <ul>
                <li><Link href="#introduction">Home</Link></li>
                <li><Link href="#aboutMe">About Us</Link></li>
                <li><Link href="#ourServices">Our Services</Link></li>
                <li><Link href="#contactUs">Contact Us</Link></li>
              </ul>
            </nav>
          </aside>
        </div>
      </header>
      <main>
        <div className='banner'>
        
          <video
          id='introduction'
          autoPlay
          muted
          loop
          playsInline
          className='banner-video'>
            <source src="1729150316228.mp4"type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <h2>Catering by</h2>
          <Image src='/pintxos-logo-6x-peach.png' alt='pintxos logo' width={500} height={200}/>
        </div>
      </main>
      <section className='about-us' id='aboutMe'>
      <h2>About Us</h2>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            At Pintxos, we specialize in bringing authentic, delicious Basque-style tapas (pintxos) to your events. With a deep passion for food, we focus on creating unique and unforgettable dining experiences. Our team is dedicated to providing you with the highest level of service, ensuring that every event is a success.
          </p>
          <p>
            Whether you&apos;re planning a corporate event, wedding, or private party, Pintxos is here to cater to your needs with customized menus and a personal touch.
          </p>
        </div>

        {/* About Us Images with Hover Text Wall */}
        <div className="about-us-images">
          <div className="image-container">
            <img src="./cat-photo.jpg" alt="Catheryn Finn" />
            <div className="overlay">
              <p>Catheryn Finn is the head chef at Pintxos with over 10 years of experience in Basque cuisine. She brings creativity and passion to every dish.</p>
            </div>
          </div>

          <div className="image-container">
            <img src="./jim-photo.jpg" alt="Jimmy" />
            <div className="overlay">
              <p>Jimmy is the founder of Pintxos and has a deep love for culinary arts. He oversees the business and ensures the highest standards in every event.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Highlights Section */}
      <div className="about-us-highlights">
        <div className="highlight">
          <FontAwesomeIcon icon={['fas', 'award']} size="2x" />
          <h3>Quality Ingredients</h3>
          <p>We use only the finest ingredients sourced from trusted suppliers.</p>
        </div>
        <div className="highlight">
          <FontAwesomeIcon icon={['fas', 'utensils']} size="2x" />
          <h3>Custom Menus</h3>
          <p>Our catering menus are fully customizable to suit your tastes and needs.</p>
        </div>
        <div className="highlight">
          <FontAwesomeIcon icon={['fas', 'users']} size="2x" />
          <h3>Experienced Team</h3>
          <p>With years of experience, we deliver exceptional service every time.</p>
        </div>
      </div>
    </section>
      <div className='horizontal-line'></div>
    <section className="our-services" id='ourServices'>
      <h2>Our Services</h2>
      <div className="services-horizontal">

        <div className="service-card">
          <img src="/images/event-catering.jpg" alt="Event Catering" />
          <div className="service-info">
            <h3>Event Catering</h3>
            <p>We offer full-service catering for weddings, corporate events, and private gatherings, with customized menus tailored to your tastes.</p>
          </div>
        </div>
        
 
        <div className="service-card">
          <img src="/images/private-dining.jpg" alt="Private Dining" />
          <div className="service-info">
            <h3>Private Dining</h3>
            <p>Host private dining experiences with our team, providing an intimate and bespoke dining experience at your venue.</p>
          </div>
        </div>

        <div className="service-card">
          <img src="/images/corporate-catering.jpg" alt="Corporate Catering" />
          <div className="service-info">
            <h3>Corporate Catering</h3>
            <p>Delivering exceptional catering services for corporate events, business meetings, and conferences with professional service and customized menus.</p>
          </div>
        </div>
      </div>
    
      <div className="cta">
        <a href="mailto:yourcustomeremail@example.com?subject=Get%20a%20Quote%20for%20Catering&body=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20catering.%0A%0AName%3A%20%5BEnter%20Your%20Name%5D%0AContact%20Number%3A%20%5BEnter%20Your%20Phone%20Number%5D%0AEnquiry%3A%20%5BEnter%20Your%20Details%20Here%5D%0A%0AThank%20you." className="cta-button">
      Get a Quote
        </a>
      </div>
    </section>
    <div className='horizontal-line'></div>
      <section className='contact-us' id='contactUs'>

      </section>
      <footer className='footer'>
  <div className='footer-display'>
    <h4>Catering by Pintxos</h4>
  </div>
  <div className="social-media">
    <a href="https://www.facebook.com/BarpintxosPR1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
    </a>
    <a href="https://www.instagram.com/barpintxospreston/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
    </a>
    <a href="https://www.tiktok.com/@barpintxos" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <FontAwesomeIcon icon={['fab', 'tiktok']} size="2x" />
    </a>
    <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g187062-d24187895-Reviews-Bar_Pintxos-Preston_Lancashire_England.html" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
     <img src='hover_tripadvisor_icon.png' alt='tripaadvisor icon' className='tripadvisor_icon'/>
    </a>
  </div>
  <div className='contactUs'>
    <p>
      <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />  36 Market Pl, Preston PR1 2AR
    </p>
    <p>
      <FontAwesomeIcon icon={['fas', 'phone']} /> +44 1772 821202
    </p>
  </div>
</footer>

    </>
  );
}
