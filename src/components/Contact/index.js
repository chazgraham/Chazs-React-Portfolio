import React from 'react';

function ContactForm() {

  return (
    <>
      <section className='contact_img'>
        <div>
          <h1>CONTACT ME</h1>
        </div>
      </section>
      <section>
        <div>
          <h2>Location:</h2>
          <div>Map goes here</div>
        </div>
        <div>
          <h2>Talk To Me</h2>
          <div>
            <h5>EMAIL</h5>
            <a href = "mailto: chazhg80.cg@gmail.com">chazhg80.cg@gmail.com</a>
            <h5>Follow Me:</h5>
            <ul className='flex-row'>
                <li>
                    <a href='https://github.com/chazgraham'><i class="fa fa-github fa-2x"></i></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/chaz-graham-a95a43258'><i class="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li>
                    <a href='https://stackoverflow.com/users/19429367/chaz-graham'><i class="fa fa-stack-overflow fa-2x"></i></a>
                </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}


export default ContactForm;