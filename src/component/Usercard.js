import React from 'react';
import './usercard.css';

function Usercard({ el }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    el.name
  )}&background=0f172a&color=38bdf8&size=200&bold=true&font-size=0.4`;

  return (
    <div className="user-card">

 
      <div className="card-glow" />

 
      <div className="card-header">
  <div className="greendot">
    <img src={avatarUrl} className="pfp" alt={el.name} />
    <span className="dot" />
  </div>

  <div className="text">
    <h2 className="name">{el.name}</h2>
    <span className="username">@{el.username}</span>
  </div>


  <div className="company-section">
    <div className="company-tag">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 21V7l9-4 9 4v14H3zm2-2h14V8.35l-7-3.11-7 3.11V19zm3-2h2v-4H8v4zm4 0h2v-7h-2v7zm4 0h2v-5h-2v5z"/>
      </svg>
      {el.company.name}
    </div>
      <span className="cont">{el.company.bs}</span>

  </div>
</div>


      <div className="divider">
        <span className="con">CONTACT</span>
      </div>

  
      <div className="bodysection">
        <div className="grid">

          <div className="item">
            <div className="icon email-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
            </div>
            <div className="content">
              <span className="contact">Email</span>
              <span className="contact-content">{el.email}</span>
            </div>
          </div>

          <div className="item">
            <div className="icon phone-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="content">
              <span className="contact">Phone</span>
              <span className="contact-content">{el.phone}</span>
            </div>
          </div>

          <div className="item">
            <div className="icon web-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div className="content">
              <span className="contact">Website</span>
              <span className="contact-content">{el.website}</span>
            </div>
          </div>

          <div className="item">
            <div className="icon loc-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="content">
              <span className="contact">Location</span>
              <span className="contact-content">{el.address.street}, {el.address.suite} , {el.address.city} , {el.address.zipcode}</span>
            </div>
          </div>

        </div>

      
        <div className="catchphrase-section">
          <svg className="quote-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
          <p className="catchphrase">{el.company.catchPhrase}</p>
        </div>
      </div>



    </div>
  );
}

export default Usercard;