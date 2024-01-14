import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


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
      <a href="mailto:thomaskambale1@gmail.com?subject=Open%20to%20work%3F&body=Hello%20Thomas%2C%0A%0AI%20admire%20your%20proficiency%20in%20system%20development.%20I'm%20exploring%20options%20for%20a%20custom%20system%20to%20streamline%20my%20operations.%20If%20you're%20open%20to%20collaboration%2C%20I'd%20love%20to%20discuss%20my%20requirements%20further.%20Get%20in%20touch%20when%20you%20can.%20Thanks%21"
  target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000"}} />
</a>

<p/>
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