import React from 'react';
import { Container } from 'react-bootstrap';

function ContactForm() {

  return (
    <Container className='flex-row'>
      <aside>
        <i class="fa fa-solid fa-envelope fa-5x"></i>
        <h4>Address and Phone</h4>
        <p>
          Chaz Graham
          <br></br> 
          San Antionio, TX
          <br></br>
          210-215-1351 
        </p>
      </aside>
      <div className='email'>
      <p>Please feel free to get in touch with me if you have any questions or concerns by emailing me at <a href='mailto: chazhg80.cg@gmail.com'>chazhg80.cg@gmail.com</a></p>
      </div>
    </Container>
  );
}


export default ContactForm;