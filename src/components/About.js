import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs,faReact,   } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <section id="about">
      <div>About Kambale</div>
      <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      
      Hi, I'm Thomas, an IT professional with a degree in Information Technology. I specialize in full-stack development, excelling in backend technologies.My focus is on crafting efficient solutions. I am passionate about creating software that addresses real-world challenges, aiming to enhance efficiency and functionality. With a commitment to continuous learning, I bring a well-rounded skill set to the table. Let's collaborate and build innovative solutions that make a positive impact in any environment.
<p/>Proficient in :
<p/>
<FontAwesomeIcon icon={faHtml5} style={{color: "#000000",}} /> <span/> HTML
<p/>
 <FontAwesomeIcon icon={faCss3Alt} style={{color: "#000000",}} /> <span/> CSS
 <p/>
  <FontAwesomeIcon icon={faJs} style={{color: "#000000",}} /> <span/> Javascript
  <p/>
   <FontAwesomeIcon icon={faReact} style={{color: "#000000",}} /> <span/> React
   <p/> Ruby
   <p/>Ruby on Rails
   <p/> <span/>SQL.
    </div>
    <div class="col">
      Waanjapi
      {/* <img src="kambale/src/assets/Kambale.png" class="img-fluid" alt="Mtanijuaje?"></img> */}
      <img src='/assets/Kambale.png' className="img-fluid" alt="Mtanijuaje?" />
      

    </div>
  </div>
</div>
    </section>
  );
}

export default About;
