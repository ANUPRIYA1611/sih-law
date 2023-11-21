import React from 'react';
import './AboutUs.css'; 
const AboutUs = () => {
  return (
    <div>
     <div className="about-us-container">
        
      <div className="about-us-content">
        <h1 className="abh1">Welcome!</h1>
       
        <p className="aboutp5">
          Our team of experienced attorneys is dedicated to providing excellent legal
          services to our clients. We specialize in various areas of law including
          criminal defense, family law, corporate law, and more. With a focus on
          professionalism and integrity, we strive to achieve the best possible outcome for
          every case.
        </p>
        <h2 className="abh1">Our Mission!</h2>
        <p className="aboutp5">
         Empowering Clients: We believe in empowering our clients with knowledge and understanding. Legal matters can be intimidating, but we are here to guide you through the complexities, ensuring you comprehend your options and can make informed decisions about your case.

Pursuit of Justice: We are unwavering in our commitment to justice. Regardless of the complexity of the case or the challenges faced, we relentlessly advocate for fairness, truth, and the rights of our clients. We stand as guardians of justice, championing the cause of those who entrust us with their legal battles.
 </p>
      </div>
      <div>
            <img className="aboutimg" src="https://i.pinimg.com/564x/75/9a/15/759a157dd8b2d4cdcb760d543813be82.jpg"></img>
        </div>
    </div>
    </div>
  );
};

export default AboutUs;
