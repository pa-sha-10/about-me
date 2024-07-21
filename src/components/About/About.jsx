import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Know Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Pawan Sharma"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h1><b>Education</b></h1><br/>
              <h3>National Institute of Technology Raipur</h3>
              <p>
                Majoring in Information Technology.<br/>
                CGPA:8.75<br/>
                2021-2025<br/>
                
              </p><br/>
              <p>
                <h3>Delhi Public School</h3>
                <b>Class 12th</b>: Studied Physics,Chemistry Mathematics and Engineering Graphics.<br/>
                <b>Class 10th</b>: Studied Social Sciences,Mathematics,English,Science and Sanskrit.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Responsibilities</h3>
              <p>
              Executive at Technocracy.<br/>
              Vice Head Boy of Junior Wing at School.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
              Playing and watching Football.<br/>
              Reading spy books.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
