import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div  >
        
       
        <footer class="footer-distributed">

<div className="footer-left">

    <p className="footer-links">
        Trusted
        &nbsp;
        Reliable
        &nbsp;
        Services
        &nbsp;
        Athunticate
        &nbsp;
        Registered
        &nbsp;
        University of Gujrat
    </p>

    <p class="footer-company-name">Mr: Adil &copy; 2019</p>

</div>

<div class="footer-right">

    <form method="get" action="#">
        <input placeholder="Search our website" name="search" />
        <i class="fa fa-search"></i>
    </form>

</div>

</footer>
  

      </div>
    );
  }
}

export default Footer;
