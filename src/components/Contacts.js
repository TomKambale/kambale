import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



function Contacts() {
  return (
    <section id='contacts'>
        <div className="row justify-content-evenly">
    <div className="col-4">
    <figure className="text-end">
  <blockquote className="blockquote">
    <p>"The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one."</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Mario Fusco
  </figcaption>
</figure>
    </div>
    <div className="col-4">
      {/* socials using logos */}
      {/* faInstagram, <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faInstagram} />
</a> */}
<a href="tel:+254748360075">
<FontAwesomeIcon icon={faWhatsapp} style={{color: "#00ffb3",}} />
</a>

<p />
<a href="https://www.linkedin.com/in/thomas-kambale/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} />
</a>
<p />
<a href="https://github.com/TomKambale" target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon icon={faGithub} style={{color: "#000000",}} />
</a>

    </div>
  </div>
        
    </section>
    
  )
}

export default Contacts