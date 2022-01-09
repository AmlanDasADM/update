import React from 'react'
import {EmailShareButton,FacebookShareButton , TwitterShareButton , LinkedinShareButton } from 'react-share'
import {FacebookIcon,TwitterIcon,EmailIcon , LinkedinIcon} from 'react-share'

function Contact2() {
    return (
        <>
      <div class="container-form">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p><i class="far fa-adress"></i> 92 Jalalabad Cant. Sylhet, NY 11553</p>
            </div>
            <div class="information">
              <img src="img/email.png" class="icon" alt="" />
              <p><i class="far fa-envelope"></i> lorem@ipsum.com</p>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              <p><i class="fas fa-phone-alt"></i> 123-456-789</p>
            </div>
          </div>

          <div class="social-media mb-3">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div class="social-media-share">
            <p><i class="fas fa-share"></i> Share Our Web:</p>
            <div class="social-icons-share ">
                        <FacebookShareButton className='m-2' url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <FacebookIcon logoFillColor="white" round={true} size={35}></FacebookIcon>
                        </FacebookShareButton>        
                        <LinkedinShareButton className='m-2' url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <LinkedinIcon logoFillColor="white" round={true} size={35}></LinkedinIcon>
                        </LinkedinShareButton>        
                        <TwitterShareButton className='m-2' url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <TwitterIcon logoFillColor="white" round={true} size={35}></TwitterIcon>
                        </TwitterShareButton> 
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Enroll Now</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder='Name'/>
             
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" placeholder='Email' />
            
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input"  placeholder='Phone'/>
            
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" placeholder='Message'></textarea>
              {/* <label for="">Message</label>
              <span>Message</span> */}
            </div>
            <input type="submit" value="Send" class="btn-2" />
          </form>
        </div>
      </div>
    </div>
        </>
    )
}

export default Contact2

