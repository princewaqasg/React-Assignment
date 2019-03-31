import React, { Component } from 'react';

import './contact.css';

class Contact extends Component {
  render() {
    return (
        
      <div id="contact">
  
  <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Contact Us</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
      <input placeholder="Your name" type="text"  required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email"  required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number " type="tel"  required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site " type="url"  />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...."  ></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" >Submit</button>
    </fieldset>

  </form>
</div>
  
       </div>
    );
  }
}

export default Contact;
