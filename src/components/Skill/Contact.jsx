import React , {useState} from 'react';
import {EmailShareButton,FacebookShareButton , TwitterShareButton } from 'react-share'
import {FacebookIcon,TwitterIcon,EmailIcon} from 'react-share'
import axios from 'axios'


function Contact()

{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')
    
    // onChange function

    const nameOnChanged = (e) =>
    {
        setName(e.target.value)
    }

    const emailOnChanged = (e) =>
    {
        setEmail(e.target.value)
    }

    const descOnChanged = (e) =>
    {
        setDescription(e.target.value)
    }
  
    //   onClick function

    const handleOnClicked = (e) => {
        e.preventDefault()

        const form = {
            name,
            email,
            description
        }

        setName("");
        setEmail("");
        setDescription("");
        axios.post('/post', form)
            .then(res =>setMessage(res.data))
            .catch(err => console.log(err))
}
    return (
    <div className='contact-section-one' id='contact-section' >
             <div className="heading">
                    <h3 >Contact me</h3>
                    <span ></span>
                    <div className="heading-component-line"></div>
                    <div className="heading-component-line-2"></div>
                </div>
<div class="contact ">           
  <div class="left-section">
    <div class="links">
      <p ><i class="fas fa-phone-alt"></i>  Call us:</p>
                        <p >+880 162 395 6856</p>
                        <p ><i class="fas fa-share"></i>  Share Our Web</p>
                        <FacebookShareButton url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <FacebookIcon logoFillColor="white" round={true} size={35}></FacebookIcon>
                        </FacebookShareButton>        
                        <EmailShareButton url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <EmailIcon logoFillColor="white" round={true} size={35}></EmailIcon>
                        </EmailShareButton>        
                        <TwitterShareButton url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <TwitterIcon logoFillColor="white" round={true} size={35}></TwitterIcon>
                        </TwitterShareButton>  
      <p ><i class="far fa-envelope"></i>   Mail us:</p>
      <p>amlan9655@gmail.com</p>
    </div>
          </div>
          




  <form id="form" encType="multipart/form-data"  >
      <h2 >Have Something To Write?</h2>
                    <p style={{ color:"green"}}>{ message}</p>
      <label for="text" >Name:</label>
      <input type="text"name="name" id="text" onChange={ nameOnChanged} value={name}/>


      <label for="email">Email:</label>
      <input type="email" name="email" id="email" onChange={ emailOnChanged} value={email}/>


      <label for="textarea">Your Message:</label> 
      <textarea name= "message" id="textarea" cols="30" rows="5" onChange={ descOnChanged} value={description}></textarea>
      <button type='submit' class="btn-danger mt-4" onClick={handleOnClicked}>Send</button>
  </form>
</div>
</div>
    )
}


export default  Contact 
