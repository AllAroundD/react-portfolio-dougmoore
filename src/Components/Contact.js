// eslint-disable-next-line 
import React, { useState } from 'react';

const Contact = ({ data }) => {
   let networks = '', email = '', city = '', state = '';

   if (data) {
      // for social media links
      networks = data.social.map(function (network) {
         return <li key={network.name}>
            <a href={network.url}
               target="_blank"
               rel="noopener noreferrer">
               <i className={'social ' + network.className}></i>
            </a>
         </li >
      })
      email = data.email;
      city = data.address.city;
      state = data.address.state;
   }

   return (
      <section id="contact">
         {/* <div className="full-width">
            <h1 className="mb-5 text-center">Let's connect</h1>
            <div className="third-width text-center" style={{ border: 'blue solid' }}>
               <h2>Hire me</h2>
               <p>< a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <div className="third-width text-center" style={{ border: 'red solid' }}>
               <h2>Follow Me</h2>
               <ul className="social">{networks}</ul>
            </div>
            <div className="third-width text-center" style={{ border: 'green solid' }}>
               <h2>Meet me</h2>
               <p>
                  {city}, {state}<br />
                  Let's go to meetups together!
               </p>
            </div>
         </div> */}


         <div className="full-width">
            <h1 className="mb-5 text-center">Let's connect</h1>
            <div className="row">
               <div className="third-width text-center" style={{ border: '#903749 solid' }}>
                  <h2>Hire me</h2>
                  <p>< a href={`mailto:${email}`}>{email}</a></p>
               </div>
               <div className="third-width text-center" style={{ border: '#903749 solid' }}>
                  <h2>Follow Me</h2>
                  <ul className="social">{networks}</ul>
               </div>
               <div className="third-width text-center" style={{ border: '#903749 solid' }}>
                  <h2>Meet me</h2>
                  <p>
                     {city}, {state}<br />
                     Let's go to meetups together!
                  </p>
               </div>

            </div>
         </div>
      </section >
   );
}

export default Contact;
