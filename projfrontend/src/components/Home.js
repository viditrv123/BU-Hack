import React from 'react';
import "./style.css"
import doctors_4 from "../assets/doctors/doctors-4.jpg";
import doctors_2 from "../assets/doctors/doctors-2.jpg";
import doctor_7 from "../assets/doctors/doctor-7.jpg";
import doctors_41 from "../assets/doctors/doctors-41.jpg"
import testimonials_1 from "../assets/testimonials/testimonials-1.jpg"
import testimonials_2 from "../assets/testimonials/testimonials-2.jpg"
import testimonials_3 from "../assets/testimonials/testimonials-3.jpg"
import testimonials_4 from "../assets/testimonials/testimonials-4.jpg"
import testimonials_5 from "../assets/testimonials/testimonials-5.jpg"
import { isAuthenticated } from '../auth/helper';
import { Avatar } from '@material-ui/core';

const Home=()=>{

  if(isAuthenticated())
  {
    return(<div>
        <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
    <div className="container d-flex">
      <div className="contact-info mr-auto">
        <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">healingequilibrium@gmail.com</a>
        <i className="icofont-phone"></i> +91 9999888776
        <i className="icofont-google-map"></i> AZ-57, IP Extension,Delhi-92
      </div>
      <div className="social-links">
        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
        <a href="#" className="skype"><i className="icofont-skype"></i></a>
        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
      </div>
    </div>
  </div>

  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo mr-auto"><a href="index.html">Healing Equilibrium</a></h1>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="http://localhost:8080/">Video</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/Payment">Payment</a></li>
          <li><a href="https://covidseverity-healing.herokuapp.com/">Predict Covid</a></li>
          <Avatar><a href="/Profile">V</a></Avatar>

        </ul>
      </nav>
      <a href="#appointment" className="appointment-btn scrollto">Make an Appointment</a>

    </div>
  </header>
  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <h1>Welcome to Healing Equilibrium</h1>
      <h2>We help to heal.</h2>
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
  <main id="main">

    <section id="why-us" className="why-us">
      <div className="container">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Healing Equilibrium?</h3>
              <p>
               Healing Equilibrium provides you the best services at the comfort of your homes without risking your lives as well as others. You can book an appointment online and we are here to help. The doctors will check you live through video-conferencing and call you to meet in person only if necessary. You can download your prescriptions and reports as well,thus helping in saving paper.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Face-to-Face Interaction</h4>
                    <p>You can talk to the most-experienced doctors without any hassle.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Online reports generated</h4>
                    <p>You can download your report and prescriptions via Email easily.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>No risk of visiting a hospital</h4>
                    <p>You can save yourself from the risk of visiting a hospital physically.
                    Your home is the safest place to be.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>KNOW MORE ABOUT HEALING EQUILIBRIUM</h3>
            <p>We strive to provide you with the best medical services and healthcare facilities through the comfort of your home.
            Healing Equilibrium is a way to help you adapt to the new normal. With increased cases in COVID-19, it's our responsibility to ensure your safety and wellness. Healing Equilibrium will help you achieve that. </p>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint"></i></div>
              <h4 className="title"><a href="">100+ Doctors</a></h4>
              <p className="description">Here, You'll get more than hundreds of experienced and knowledgeable doctors whom you can consult with regarding any of your health issues.</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title"><a href="">Medical History</a></h4>
              <p className="description">You don't have to carry your medical prescriptions everywhere. It is safe with us. You can check and download your medical history anytime. </p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-atom"></i></div>
              <h4 className="title"><a href="">COVID-19 Hospitals near you</a></h4>
              <p className="description">We cover and list all covid-19 hospitals near you making it easier for any sort of communication.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    <section id="counts" className="counts">
      <div className="container">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="icofont-doctor-alt"></i>
              <span data-toggle="counter-up">107</span>
              <p>Doctors</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="icofont-patient-bed"></i>
              <span data-toggle="counter-up">53</span>
              <p>Hospitals</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-laboratory"></i>
              <span data-toggle="counter-up">8</span>
              <p>Research Labs</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-award"></i>
              <span data-toggle="counter-up">150</span>
              <p>Awards</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="appointment" className="appointment section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Book your appointment today with the doctor of your choice.</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
          <div className="form-row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 form-group">
              <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <select name="department" id="department" className="form-control">
                <option value="">Select Department</option>
                <option value="Department 1">Covid-19</option>
                <option value="Department 2">Viral Fever</option>
                <option value="Department 3">Cough and Cold</option>
              </select>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <select name="doctor" id="doctor" className="form-control">
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Dr. M.D. Srivastava</option>
                <option value="Doctor 2">Dr. A.S. Mathur</option>
                <option value="Doctor 3">Dr. Parul Saini</option>
              </select>
              <div className="validate"></div>
            </div>
          </div>

          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Make an Appointment</button></div>
        </form>

      </div>
    </section>]
    <section id="doctors" className="doctors">
      <div className="container">

        <div className="section-title">
          <h2>Doctors</h2>
          <p>Extremely qualified and experienced doctors at your service from all over India.</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic"><img  src={doctors_4} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Dr. M.D. Srivastava</h4>
                <span>MBBS,MD(Australia)</span>
                <p></p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={doctors_2} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Dr. Parul Saini</h4>
                <span>M.D., PhD</span>
                <p></p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={doctor_7} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Dr. A.S. Mathur</h4>
                <span>Cardiologist, MD</span>
                <p></p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img style={{borderRadius:50}} src={doctors_41} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Dr. Samantha Aggarwal</h4>
                <span>Orthopedics Specialist</span>
                <p></p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Here are some Frequently asked questions to clear your queries. If you have any other question, you can mail us at healingequilibrium@gmail.com</p>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" className="collapse" href="#faq-list-1">How can I contact the doctor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                <p>
                  You can go to the appointments section, select the doctor of your choice and book an appointment. We'll schedule it for you.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" className="collapsed"> How will the doctor analyse my health condition online? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                <p>
                  When your appointment is schedules, you will have a live video conferencing session with the doctor where you can share your problems with them easily.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" className="collapsed"> Is it reliable? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                <p>
                  We provide you a free trial for a week where you can consult any doctor of your choice and they'll help you out.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-4" className="collapsed"> How will my tests be conducted? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                <p>
                  The doctor will examine your condition and if necessary, he will call you to the lab for the blood or Covid tests.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-5" className="collapsed"> How long does it take for the examination? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                <p>
                  As soon as you fill the form,your appointment will be scheduled within next 12-24hours.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
    <section id="testimonials" className="testimonials">
      <div className="container">

        <div className="owl-carousel testimonials-carousel">

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_1} className="testimonial-img" alt="" />
              <h3>Sambhav Oberoi</h3>
              <h4>Business Analyst</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                I got the best services from Healing Equilibrium.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_2} className="testimonial-img" alt="" />
              <h3>Sara Sharma</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                They are amazing. Not only the doctor gave me prescriptions but also kept a check on my health regularly.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_3} className="testimonial-img" alt="" />
              <h3>Riya Dhamija</h3>
              <h4>Store Owner</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Amazing initiative in this Covid-19 Pandemic.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_4} className="testimonial-img" alt="" />
              <h3>Mohit Kumar</h3>
              <h4>Freelancer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                I tried this service few days back and I am quite satisfied.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_5} className="testimonial-img" alt="" />
              <h3>Jitesh Bhardwaj</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                My mother wasn't well so we tried Healing Equilibrium instead of getting into the risk of hospitals. Highly Recommended.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact Us</h2>

        </div>
      </div>

      <div>
        <iframe style={{"border":"0", "width": "100%", "height": "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"></iframe>
      </div>

      <div className="container">
        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>AZ-57, IP Extension,Delhi-92,India</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>healingequilibrium@gmail.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+91 9999888776</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>

  </main>
  <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Healing Equilibrium</h3>
            <p>
              AZ-57, IP Extension<br/>
              Delhi-110092<br/>
              India <br/><br/>
              <strong>Phone:</strong> +91 9999888776<br />
              <strong>Email:</strong> healingequilibrium@gmail.com<br />
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>



        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="mr-md-auto text-center text-md-left">
        <div className="copyright">
          &copy; Copyright 2021 <strong><span>Healing Equilibrium</span></strong>. All Rights Reserved
        </div>

      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>

  
  <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>

    </div>);
  }
  else{
    return(<div>
      <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
  <div className="container d-flex">
    <div className="contact-info mr-auto">
      <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">healingequilibrium@gmail.com</a>
      <i className="icofont-phone"></i> +91 9999888776
      <i className="icofont-google-map"></i> AZ-57, IP Extension,Delhi-92
    </div>
    <div className="social-links">
      <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
      <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
      <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
      <a href="#" className="skype"><i className="icofont-skype"></i></a>
      <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
    </div>
  </div>
</div>

<header id="header" className="fixed-top">
  <div className="container d-flex align-items-center">

    <h1 className="logo mr-auto"><a href="index.html">Healing Equilibrium</a></h1>

    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li className="active"><a href="index.html">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="http://localhost:8080/">Video</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/Register">Register</a></li>
        <li><a href="/D_Login">Doctor-Login</a></li>
        <li><a href="/H_Login">Hospital-Login</a></li>
        <li><a href="/Login">Patient-Login</a></li>
        <li><a href="/Payment">Payment</a></li>
        <li><a href="https://covidseverity-healing.herokuapp.com/">Predict Covid</a></li>
      </ul>
    </nav>
    <a href="#appointment" className="appointment-btn scrollto">Make an Appointment</a>

  </div>
</header>
<section id="hero" className="d-flex align-items-center">
  <div className="container">
    <h1>Welcome to Healing Equilibrium</h1>
    <h2>We help to heal.</h2>
    <a href="#about" className="btn-get-started scrollto">Get Started</a>
  </div>
</section>
<main id="main">

  <section id="why-us" className="why-us">
    <div className="container">

      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content">
            <h3>Why Choose Healing Equilibrium?</h3>
            <p>
             Healing Equilibrium provides you the best services at the comfort of your homes without risking your lives as well as others. You can book an appointment online and we are here to help. The doctors will check you live through video-conferencing and call you to meet in person only if necessary. You can download your prescriptions and reports as well,thus helping in saving paper.
            </p>
            <div className="text-center">
              <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-flex align-items-stretch">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-receipt"></i>
                  <h4>Face-to-Face Interaction</h4>
                  <p>You can talk to the most-experienced doctors without any hassle.</p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Online reports generated</h4>
                  <p>You can download your report and prescriptions via Email easily.</p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-images"></i>
                  <h4>No risk of visiting a hospital</h4>
                  <p>You can save yourself from the risk of visiting a hospital physically.
                  Your home is the safest place to be.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section id="about" className="about">
    <div className="container-fluid">

      <div className="row">
        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch">
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
        </div>

        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
          <h3>KNOW MORE ABOUT HEALING EQUILIBRIUM</h3>
          <p>We strive to provide you with the best medical services and healthcare facilities through the comfort of your home.
          Healing Equilibrium is a way to help you adapt to the new normal. With increased cases in COVID-19, it's our responsibility to ensure your safety and wellness. Healing Equilibrium will help you achieve that. </p>

          <div className="icon-box">
            <div className="icon"><i className="bx bx-fingerprint"></i></div>
            <h4 className="title"><a href="">100+ Doctors</a></h4>
            <p className="description">Here, You'll get more than hundreds of experienced and knowledgeable doctors whom you can consult with regarding any of your health issues.</p>
          </div>

          <div className="icon-box">
            <div className="icon"><i className="bx bx-gift"></i></div>
            <h4 className="title"><a href="">Medical History</a></h4>
            <p className="description">You don't have to carry your medical prescriptions everywhere. It is safe with us. You can check and download your medical history anytime. </p>
          </div>

          <div className="icon-box">
            <div className="icon"><i className="bx bx-atom"></i></div>
            <h4 className="title"><a href="">COVID-19 Hospitals near you</a></h4>
            <p className="description">We cover and list all covid-19 hospitals near you making it easier for any sort of communication.</p>
          </div>

        </div>
      </div>

    </div>
  </section>
  <section id="counts" className="counts">
    <div className="container">

      <div className="row">

        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="icofont-doctor-alt"></i>
            <span data-toggle="counter-up">107</span>
            <p>Doctors</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="icofont-patient-bed"></i>
            <span data-toggle="counter-up">53</span>
            <p>Hospitals</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="icofont-laboratory"></i>
            <span data-toggle="counter-up">8</span>
            <p>Research Labs</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="icofont-award"></i>
            <span data-toggle="counter-up">150</span>
            <p>Awards</p>
          </div>
        </div>

      </div>

    </div>
  </section>
  <section id="appointment" className="appointment section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Make an Appointment</h2>
        <p>Book your appointment today with the doctor of your choice.</p>
      </div>

      <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
        <div className="form-row">
          <div className="col-md-4 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
            <div className="validate"></div>
          </div>
          <div className="col-md-4 form-group">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
            <div className="validate"></div>
          </div>
          <div className="col-md-4 form-group">
            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
            <div className="validate"></div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 form-group">
            <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
            <div className="validate"></div>
          </div>
          <div className="col-md-4 form-group">
            <select name="department" id="department" className="form-control">
              <option value="">Select Department</option>
              <option value="Department 1">Covid-19</option>
              <option value="Department 2">Viral Fever</option>
              <option value="Department 3">Cough and Cold</option>
            </select>
            <div className="validate"></div>
          </div>
          <div className="col-md-4 form-group">
            <select name="doctor" id="doctor" className="form-control">
              <option value="">Select Doctor</option>
              <option value="Doctor 1">Dr. M.D. Srivastava</option>
              <option value="Doctor 2">Dr. A.S. Mathur</option>
              <option value="Doctor 3">Dr. Parul Saini</option>
            </select>
            <div className="validate"></div>
          </div>
        </div>

        <div className="form-group">
          <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
          <div className="validate"></div>
        </div>
        <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Make an Appointment</button></div>
      </form>

    </div>
  </section>]
  <section id="doctors" className="doctors">
    <div className="container">

      <div className="section-title">
        <h2>Doctors</h2>
        <p>Extremely qualified and experienced doctors at your service from all over India.</p>
      </div>

      <div className="row">

        <div className="col-lg-6">
          <div className="member d-flex align-items-start">
            <div className="pic"><img  src={doctors_4} className="img-fluid" alt="" /></div>
            <div className="member-info">
              <h4>Dr. M.D. Srivastava</h4>
              <span>MBBS,MD(Australia)</span>
              <p></p>
              <div className="social">
                <a href=""><i className="ri-twitter-fill"></i></a>
                <a href=""><i className="ri-facebook-fill"></i></a>
                <a href=""><i className="ri-instagram-fill"></i></a>
                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src={doctors_2} className="img-fluid" alt="" /></div>
            <div className="member-info">
              <h4>Dr. Parul Saini</h4>
              <span>M.D., PhD</span>
              <p></p>
              <div className="social">
                <a href=""><i className="ri-twitter-fill"></i></a>
                <a href=""><i className="ri-facebook-fill"></i></a>
                <a href=""><i className="ri-instagram-fill"></i></a>
                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src={doctor_7} className="img-fluid" alt="" /></div>
            <div className="member-info">
              <h4>Dr. A.S. Mathur</h4>
              <span>Cardiologist, MD</span>
              <p></p>
              <div className="social">
                <a href=""><i className="ri-twitter-fill"></i></a>
                <a href=""><i className="ri-facebook-fill"></i></a>
                <a href=""><i className="ri-instagram-fill"></i></a>
                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4">
          <div className="member d-flex align-items-start">
            <div className="pic"><img style={{borderRadius:50}} src={doctors_41} className="img-fluid" alt="" /></div>
            <div className="member-info">
              <h4>Dr. Samantha Aggarwal</h4>
              <span>Orthopedics Specialist</span>
              <p></p>
              <div className="social">
                <a href=""><i className="ri-twitter-fill"></i></a>
                <a href=""><i className="ri-facebook-fill"></i></a>
                <a href=""><i className="ri-instagram-fill"></i></a>
                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  <section id="faq" className="faq section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some Frequently asked questions to clear your queries. If you have any other question, you can mail us at healingequilibrium@gmail.com</p>
      </div>

      <div className="faq-list">
        <ul>
          <li data-aos="fade-up">
            <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" className="collapse" href="#faq-list-1">How can I contact the doctor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
              <p>
                You can go to the appointments section, select the doctor of your choice and book an appointment. We'll schedule it for you.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="100">
            <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" className="collapsed"> How will the doctor analyse my health condition online? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-2" className="collapse" data-parent=".faq-list">
              <p>
                When your appointment is schedules, you will have a live video conferencing session with the doctor where you can share your problems with them easily.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
            <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" className="collapsed"> Is it reliable? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-3" className="collapse" data-parent=".faq-list">
              <p>
                We provide you a free trial for a week where you can consult any doctor of your choice and they'll help you out.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="300">
            <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-4" className="collapsed"> How will my tests be conducted? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-4" className="collapse" data-parent=".faq-list">
              <p>
                The doctor will examine your condition and if necessary, he will call you to the lab for the blood or Covid tests.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400">
            <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-5" className="collapsed"> How long does it take for the examination? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-5" className="collapse" data-parent=".faq-list">
              <p>
                As soon as you fill the form,your appointment will be scheduled within next 12-24hours.
              </p>
            </div>
          </li>

        </ul>
      </div>

    </div>
  </section>
  <section id="testimonials" className="testimonials">
    <div className="container">

      <div className="owl-carousel testimonials-carousel">

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src={testimonials_1} className="testimonial-img" alt="" />
            <h3>Sambhav Oberoi</h3>
            <h4>Business Analyst</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I got the best services from Healing Equilibrium.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src={testimonials_2} className="testimonial-img" alt="" />
            <h3>Sara Sharma</h3>
            <h4>Designer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              They are amazing. Not only the doctor gave me prescriptions but also kept a check on my health regularly.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src={testimonials_3} className="testimonial-img" alt="" />
            <h3>Riya Dhamija</h3>
            <h4>Store Owner</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Amazing initiative in this Covid-19 Pandemic.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src={testimonials_4} className="testimonial-img" alt="" />
            <h3>Mohit Kumar</h3>
            <h4>Freelancer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I tried this service few days back and I am quite satisfied.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src={testimonials_5} className="testimonial-img" alt="" />
            <h3>Jitesh Bhardwaj</h3>
            <h4>Entrepreneur</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              My mother wasn't well so we tried Healing Equilibrium instead of getting into the risk of hospitals. Highly Recommended.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
  <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact Us</h2>

      </div>
    </div>

    <div>
      <iframe style={{"border":"0", "width": "100%", "height": "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"></iframe>
    </div>

    <div className="container">
      <div className="row mt-5">

        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="icofont-google-map"></i>
              <h4>Location:</h4>
              <p>AZ-57, IP Extension,Delhi-92,India</p>
            </div>

            <div className="email">
              <i className="icofont-envelope"></i>
              <h4>Email:</h4>
              <p>healingequilibrium@gmail.com</p>
            </div>

            <div className="phone">
              <i className="icofont-phone"></i>
              <h4>Call:</h4>
              <p>+91 9999888776</p>
            </div>

          </div>

        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">

          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="form-row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-md-6 form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>

        </div>

      </div>

    </div>
  </section>

</main>
<footer id="footer">

  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6 footer-contact">
          <h3>Healing Equilibrium</h3>
          <p>
            AZ-57, IP Extension<br/>
            Delhi-110092<br/>
            India <br/><br/>
            <strong>Phone:</strong> +91 9999888776<br />
            <strong>Email:</strong> healingequilibrium@gmail.com<br />
          </p>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>



      </div>
    </div>
  </div>

  <div className="container d-md-flex py-4">

    <div className="mr-md-auto text-center text-md-left">
      <div className="copyright">
        &copy; Copyright 2021 <strong><span>Healing Equilibrium</span></strong>. All Rights Reserved
      </div>

    </div>
    <div className="social-links text-center text-md-right pt-3 pt-md-0">
      <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
      <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
      <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
      <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
      <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
    </div>
  </div>
</footer>


<a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>

  </div>);
  }
}
export default Home;
