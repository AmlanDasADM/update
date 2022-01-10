import axios from 'axios'
import React ,{useState}from 'react'
import {FacebookShareButton , TwitterShareButton , LinkedinShareButton } from 'react-share'
import {FacebookIcon,TwitterIcon, LinkedinIcon} from 'react-share'

function Contact2()
{
  const url = "http://localhost:3000/update/main.7de28914446a388cd6be.hot-update.json"
  const token = "a25db276-58a9-11ec-bf63-0242ac130002"
  const [data,setData] = useState({
    name: "",
    email: "",
    phone: "",
    message:""
  })

  function handleOnchange(e)
  {
    const newData = { ...data }
    newData[e.target.id] = e.target.value 
    setData(newData)
    console.log(newData)
  }
  function onSubmit(e)
  {
    e.preventDefault()
    axios.post(token,url, {
      name: data.name,
      email: data.email,
      phone:data.phone,
      message: data.message,
      
    }).then(res =>console.log(res.data))
    .catch(err => console.log(err))

  }
  
  
    return (
        <>
      <div class="container-form" id='contact'>
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

          <form onSubmit={(e)=> onSubmit(e)} autocomplete="off" >
            <h3 class="title">Enroll Now</h3>
            <div class="input-container">
                  <input
                    type="text"
                    name="name"
                    class="input"
                    placeholder='Name'
                    onChange={(e) => handleOnchange(e)}
                    id='name'
                    value={data.name} />
             
            </div>
            <div class="input-container">
                  <input
                    type="email"
                    name="email"
                    class="input"
                    placeholder='Email'
                    onChange={(e) => handleOnchange(e)}
                    id='email'
                    value={data.email}
                  />
            
            </div>
            <div class="input-container">
                  <input
                    type="tel"
                    name="phone"
                    class="input"
                    placeholder='Phone'
                    onChange={(e) => handleOnchange(e)}
                    id='phone'
                    value={data.phone} />
            
            </div>
            <div class="input-container textarea">
                  <textarea name="message"
                    class="input"
                    placeholder='Message'
                    onChange={(e) => handleOnchange(e)}
                    id='message'
                    value={data.message} ></textarea>
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

