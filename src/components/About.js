import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faRedhat,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGlobe } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about">
      <div>About Kambale</div>
      <div class="container text-center">
        <div class="row align-items-center">
          {/* <div className="ca"> */}
          Hi, I'm Thomas, an IT professional with a degree in Information
          Technology. I specialize in full-stack development, excelling in
          backend technologies.My focus is on crafting efficient solutions. I am
          passionate about creating software that addresses real-world
          challenges, aiming to enhance efficiency and functionality. With a
          commitment to continuous learning, I bring a well-rounded skill set to
          the table. Let's collaborate and build innovative solutions that make
          a positive impact in any environment.
          <p />
        </div>

        <div>
          <a href="../assets/THOMAS%20KAMBALE.pdf" download>
            <button type="button" class="btn btn-secondary">
              Download CV
            </button>
          </a>
          <div class="row justify-content-center">
            <div class="col-4">
              <div className="frontend">
                Frontend:
                <p />
                <FontAwesomeIcon
                  icon={faHtml5}
                  style={{ color: "#000000" }}
                />{" "}
                <span /> HTML
                <p />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  style={{ color: "#000000" }}
                />{" "}
                <span /> CSS
                <p />
                <FontAwesomeIcon icon={faBootstrap} />
                <span /> Bootstrap
                <p />
                <FontAwesomeIcon
                  icon={faJs}
                  style={{ color: "#000000" }}
                />{" "}
                <span /> Javascript
                <p />
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: "#000000" }}
                />{" "}
                <span /> React
                <p />
              </div>
            </div>
            <div class="col-4">
              <div className="backend">
                Backend:
                <p />{" "}
                <FontAwesomeIcon
                  icon={faRedhat}
                  flip="horizontal"
                  style={{ color: "#000000" }}
                />
                <span /> Ruby
                <p />
                <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000" }} />
                <span />
                Ruby on Rails
                <p />
              </div>
            </div>
            <div class="col-4">
              <div className="database">
                Database
                <p />
                <FontAwesomeIcon
                  icon={faDatabase}
                  style={{ color: "#000000" }}
                />
                <span />
                SQL.
              </div>
            </div>
          </div>
          <span />
          <div />
        </div>
      </div>
    </section>
  );
}

export default About;
