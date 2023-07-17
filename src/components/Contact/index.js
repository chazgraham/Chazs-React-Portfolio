import React from 'react';

function ContactForm() {

  return (
    <>
      <section className='contact_img'>
        <div className='contact_title'>
          <h1 className='contact_h1'>CONTACT ME</h1>
        </div>
      </section>
      <section className='info_section'>
        <div>
          <h2 className='contact_h2' >Location:</h2>
          <iframe className='map_container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111224.02025107306!2d-98.54806078174981!3d29.40685012635872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1689538051749!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="?" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='my city'></iframe>
        </div>
        <div>
          <h2 className='contact_h2'>Talk To Me:</h2>
          <div>
            <h5 className='contact_h5'>EMAIL</h5>
            <a href = "mailto: chazhg80.cg@gmail.com" className='email'>chazhg80.cg@gmail.com</a>
            <h5 className='contact_h5'>Follow Me:</h5>
            <ul className='contact_ul'>
                <li className='contact_li'>
                    <a href='https://github.com/chazgraham' target="_blank" rel="noreferrer"><i class="fa fa-github fa-2x"></i></a>
                </li>
                <li className='contact_li'>
                    <a href='https://www.linkedin.com/in/chaz-graham-a95a43258' target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li className='contact_li'>
                    <a href='https://stackoverflow.com/users/19429367/chaz-graham' target="_blank" rel="noreferrer"><i class="fa fa-stack-overflow fa-2x"></i></a>
                </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}


export default ContactForm;