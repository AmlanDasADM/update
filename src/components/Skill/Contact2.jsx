import axios from 'axios'
import React, {useState} from 'react'
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share'
import {FacebookButton, TwitterButton, LinkedinButton} from 'react-social'
import {FacebookIcon, TwitterIcon, LinkedinIcon} from 'react-share'
import cartoon from "../../images/teacher.jpg"

function Contact2() {
    const url = "https://sj6wyyl2fc.execute-api.ap-southeast-1.amazonaws.com/dev/save-contact"
    const token = "a25db276-58a9-11ec-bf63-0242ac130002"
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')


// onChange function

    const nameOnChanged = (e) => {
        setName(e.target.value)
    }

    const emailOnChanged = (e) => {
        setEmail(e.target.value)
    }
    const phoneOnChanged = (e) => {
        setPhone(e.target.value)
    }

 

//   onClick function

    const handleOnClicked = (e) => {
        e.preventDefault()


        if (name.length > 0) {
            // setName("");
            // setEmail("");
            // setPhone("");
            // setMessage("");

        } else {
            setNameErr(' name is required!')
        }
        // email
        if (email.length > 0) {
            // setName("");
            // setEmail("");
            // setPhone("");
            // setMessage("");
        } else {
            setEmailErr(' email is required!')
        }
        // phone
        if (phone.length > 0) {
            // setName("");
            // setEmail("");
            // setPhone("");
            // setMessage("");
        } else {
            setPhoneErr(' phone is required!')
        }

        // success !!
        if (name.length > 1, email.length > 1, phone.length > 1) {
            const form = {
                name,
                email,
                phone,
                token
            }
            setName("");
            setEmail("");
            setPhone("");


            axios.post(url, form)
                .then(res => console.log(res.data), setText(`Your form submit successfuly `, setNameErr(''), setPhoneErr(''), setEmailErr('')))
                .catch(err => console.log(err))
        }


    }
    var link = "skill-page.herokuapp.com";

    return (
        <>
            <div class="container-form" id='contact'>
                <span class="big-circle"></span>
                <img src="img/shape.png" class="square" alt=""/>
                <div class="form">
                    <div class="contact-info">
                        <h3 class="title text-capitalize">Let's get in touch </h3>
                        <p class="text">
                        </p>
                        <div className="info mt-4 p-3">
                            <div className="information">
                                <p><i className="fas fa-map-marker-alt"></i> Mirpur, Dhaka - Bangladesh</p>
                            </div>
                            <div className="information">
                                <p><i className="far fa-envelope"></i> mr.saiful.azad@gmail.com</p>
                            </div>
                            <div className="information">
                                <p><i className="fas fa-phone-alt"></i> +8801676743076 </p>
                            </div>
                        </div>

                        <div class="social-media mb-3">
                            <div className="social-media-2 m-auto">
                                <p>Connect with us :</p>
                                <div className="social-icons-2 m-auto">
                                    <a target="_blank" href="https://www.facebook.com/mr.saiful.azad">
                                        <i className="fab fab-2 fa-facebook-f"></i>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/company/fractalslab">
                                        <i className="fab fab-2 fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="social-media-share">
                            <p><i class="fas fa-share"></i> Share Our Web:</p>
                            <div class="social-icons-share ">
                                <FacebookShareButton className='m-2' url="skill-page.herokuapp.com"
                                                     quote="Hey!Visit Our WebSite" imageUrl={cartoon} img={cartoon}>
                                    <FacebookIcon logoFillColor="white" round={true} size={35}></FacebookIcon>
                                </FacebookShareButton>
                                <LinkedinShareButton className='m-2' url="skill-page.herokuapp.com"
                                                     Title="Hey! Visit Our WebSite"  summary="Visit Our WebSite" source="Visit  WebSite">
                                    <LinkedinIcon logoFillColor="white" round={true} size={35}></LinkedinIcon>
                                </LinkedinShareButton>
                                {/* <TwitterShareButton className='m-2' url="skill-page.herokuapp.com"
                                                    quote="Hey! Visit Our WebSite">
                                    <TwitterIcon logoFillColor="white" round={true} size={35}></TwitterIcon>
                                </TwitterShareButton> */}
                               
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <span class="circle one"></span>
                        <span class="circle two"></span>
                        <form onSubmit={handleOnClicked} autocomplete="off">
                            <h3 class="title">Enroll Now</h3>
                            <h4 style={{color: "#0f0"}}>{text}</h4>
                            <div class="input-container">
                                <input
                                    type="text"
                                    name="name"
                                    class="input"
                                    placeholder='Name'
                                    onChange={nameOnChanged}
                                    id='name'
                                    value={name}/>
                                {name.length > 1 ? "" : <p className='errormsg'>{nameErr}</p>}


                            </div>
                            <div class="input-container">
                                <input
                                    type="email"
                                    name="email"
                                    class="input"
                                    placeholder='Email'
                                    onChange={emailOnChanged}
                                    id='email'
                                    value={email}

                                />
                                {email.length > 1 ? "" : <p className='errormsg'>{emailErr}</p>}

                            </div>
                            <div class="input-container">
                                <input
                                    type="tel"
                                    name="phone"
                                    class="input"
                                    placeholder='Phone'
                                    onChange={phoneOnChanged}
                                    id='phone'
                                    value={phone}/>
                                {phone.length > 1 ? "" : <p className='errormsg'>{phoneErr}</p>}


                            </div>
                            {/* <div class="input-container textarea">
                  <textarea name="message"
                            class="input"
                            placeholder='Message'
                            onChange={msgOnChanged}
                            id='message'
                            value={message}></textarea>
                                {message.length > 1 ? "" : <p className='errormsg'>{msgErr}</p>}


                            </div> */}
                            <input type="submit" value="Enroll" class="btn-2"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact2
