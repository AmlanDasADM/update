import React, {useState }from 'react'
import "./skill.css"
import cartoon from "../../images/cartoon.png"
import faqImg1 from "../../images/faq-image-2.jpg"
import faqImg2 from "../../images/faq-image-3.jpg"
import faqImg3 from "../../images/faq-image-4.jpg"
import Preview from './Preview'
import ReactPlayer from 'react-player'
import Contact from './Contact'
import Contact2 from './Contact2'
// import { BrowserRouter as Router ,  Route, Switch } from "react-router-dom";



function ReadMore({ children, maxcharacterCount = 100 })
{
    const text = children 
    const [trunked, setTrunked] = useState(true)
    const resultString = trunked ? text.slice(0, 100) : text;
     const handleOnClick = () =>
    {
        setTrunked(!trunked)
    }

    return (
        <div className="collapsed-div">
            <p className='has-text-left'>
            {resultString}
                <span onClick={handleOnClick} className='collapsed-button'> {trunked ? "...Read more" : "...Read less"} </span>
            </p>
        </div>    
    )
}
function ReadMore2({ children, maxcharacterCount = 260 })
{
    const text = children 
    const [trunked, setTrunked] = useState(true)
    const resultString = trunked ? text.slice(0, 260) : text;
     const handleOnClick = () =>
    {
        setTrunked(!trunked)
    }

    return (
        <div className="collapsed-div">
            <p className='has-text-left'>
            {resultString}
                <span onClick={handleOnClick} className='collapsed-button'> {trunked ? "...Read more" : "...Read less"} </span>
            </p>
        </div>    
    )
}


function skill()

{

    return (
        <>

            <div className="skill-container">
                <div className="first-container">
                    <div className="first-container-right-side">
                    <div className="left-side-title">
                        <div className="title-heading">
                            <h3>Spoken English</h3>
                        </div>
                        <div className="title-para">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptatibus expedita reprehenderit tempore .</p>
                        </div>
                    </div>
                    <div className="left-side-teacher">
                        <div className="teacher-heading">
                            <h3>Teacher</h3>
                        </div>
                        <div className="teacher-items">
                        <div className="teacher-image">
                            <img src={cartoon} alt="" srcset="" />
                        </div>
                        <div className="teacher-para">
                            <h4>Lorem </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quas?Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    </div>
                    {/* <div className="left-side-certificate"></div> */}
                    <div className="left-side-aboutUs">
                        <div className="about-us-heading">
                            <div className="about-title">
                                <h3>About Us</h3>
                            </div>
                            <div className="about-para">
                                <ReadMore> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni quia distinctio quae, numquam quis atque odio doloribus eni Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor veritatis rerum eveniet, fugiat consequatur eos iste cum, inventore, deleniti voluptatum! Aperiam at odio soluta vel fugiat quis, necessitatibus sequi?
                                </ReadMore>
                            </div>
                        </div>
                    </div>
                    <Preview />
                    </div>
                    <div className="right-side-container">
                                    <div class="right-side-modal-body">
                                       <ReactPlayer url="https://www.youtube.com/watch?v=oluY633rkgI" controls={true} height="100%" width="100%"/>
                                    </div>
                        <div className="course-details">
                            <div className="course-people">
                            <h6>Enrolled</h6>
                            <p>110,035</p></div>
                            <div className="course-time">
                            <h6>Hours Required  </h6>
                            <p>20 Hours</p>
                            </div>
                        </div>
                        <div className="course-more-details">
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                        </div>
                    </div>

           </div>

                    {/* FAQ  */}
                    <div className="faq">
                        <div className="faq-body">
                            <div className="faq-heading">
                                <h2>FAQ (Frequently Asked Questions)</h2>
                            </div>
                            <div className="faq-box">
                            <div className="faq-box-1st-line">
                                <div className="box">
                                    <div className="faq-box-img">
                                        <img src={faqImg2} alt="" srcset="" />
                                    </div>
                                    <div className="faq-box-heading">
                                                <h5>Q.কোর্সটি কীভাবে কিনবো?</h5>
                                    </div>
                                    <div className="faq-box-para">
                                <ReadMore2  className="readmore" >"কোর্সটি কিনুন" বাটনে ক্লিক করুন।
                                    আপনি যেই ফোন নম্বর বা ইমেইল দিয়ে কোর্সটি কিনতে চান সেটি প্রদান করে “এগিয়ে যান” বাটনে ক্লিক করুন।
                                    “প্রশ্ন-চিহ্ন” আইকনে ক্লিক করে পেমেন্ট করার নিয়মটি জেনে নিন।
                                    আপনার মোবাইল নাম্বার বা ইমেইল দিয়ে “কোর্সটি কিনুন” অপশনে ক্লিক করুন। 
                                    পেমেন্ট মেথড নির্বাচন করুন।
                                    আপনাকে পেমেন্ট সেকশনে নিয়ে যাওয়া হবে যেখানে আপনার পেমেন্ট করতে পারবেন।
                                                    পেমেন্ট সম্পন্ন করার পর আপনার একাউন্টে “আপনার কোর্সসমূহ” সেকশন কোর্সটি চলে আসবে।
                                        </ReadMore2>
                                    </div>

                                </div>
                                <div className="box">
                                    <div className="faq-box-img">
                                        <img src={faqImg3} alt="" srcset="" />
                                    </div>
                                    <div className="faq-box-heading">
                                                <h5>Q.কোর্সটি কীভাবে কিনবো?</h5>
                                    </div>
                                    <div className="faq-box-para">
                                <ReadMore2  className="readmore">"কোর্সটি কিনুন" বাটনে ক্লিক করুন।
                                    আপনি যেই ফোন নম্বর বা ইমেইল দিয়ে কোর্সটি কিনতে চান সেটি প্রদান করে “এগিয়ে যান” বাটনে ক্লিক করুন।
                                    “প্রশ্ন-চিহ্ন” আইকনে ক্লিক করে পেমেন্ট করার নিয়মটি জেনে নিন।
                                    আপনার মোবাইল নাম্বার বা ইমেইল দিয়ে “কোর্সটি কিনুন” অপশনে ক্লিক করুন। 
                                    পেমেন্ট মেথড নির্বাচন করুন।
                                    আপনাকে পেমেন্ট সেকশনে নিয়ে যাওয়া হবে যেখানে আপনার পেমেন্ট করতে পারবেন।
                                                    পেমেন্ট সম্পন্ন করার পর আপনার একাউন্টে “আপনার কোর্সসমূহ” সেকশন কোর্সটি চলে আসবে।
                                        </ReadMore2>
                                    </div>

                                </div>
                                <div className="box">
                                    <div className="faq-box-img">
                                        <img src={faqImg1} alt="" srcset="" />
                                    </div>
                                    <div className="faq-box-heading">
                                                <h5>Q.কোর্সটি কীভাবে কিনবো?</h5>
                                    </div>
                                    <div className="faq-box-para">
                                <ReadMore2 className="readmore">"কোর্সটি কিনুন" বাটনে ক্লিক করুন।
                                    আপনি যেই ফোন নম্বর বা ইমেইল দিয়ে কোর্সটি কিনতে চান সেটি প্রদান করে “এগিয়ে যান” বাটনে ক্লিক করুন।
                                    “প্রশ্ন-চিহ্ন” আইকনে ক্লিক করে পেমেন্ট করার নিয়মটি জেনে নিন।
                                    আপনার মোবাইল নাম্বার বা ইমেইল দিয়ে “কোর্সটি কিনুন” অপশনে ক্লিক করুন। 
                                    পেমেন্ট মেথড নির্বাচন করুন।
                                    আপনাকে পেমেন্ট সেকশনে নিয়ে যাওয়া হবে যেখানে আপনার পেমেন্ট করতে পারবেন।
                                                    পেমেন্ট সম্পন্ন করার পর আপনার একাউন্টে “আপনার কোর্সসমূহ” সেকশন কোর্সটি চলে আসবে।
                                        </ReadMore2>
                                    </div>

                                </div>

                                </div>
                            {/* <div className="faq-box-2nd-line">
                                <div className="box"> 3rd box</div>
                                <div className="box"> 4th box</div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                     {/* about our course   */} 
                <div className="about-our-course">
                    <div className="about-body">
                        <div className="our-course-heading">
                            <h2> About Our Course </h2>
                        </div>  
                        <div className="about-box">
                            <div className="about-box-1st-line">
                                <div className="about-inner-box">
                                    <div className="about-box-img">
                                        <img src={faqImg2} alt="" srcset="" />
                                    </div>
                                    <div className="about-box-heading">
                                                <h5>Q.To whom the course is?</h5>
                                    </div>
                                    <div className="about-box-para">
                                <p>Someone have keen interest in AWS public cloud
                                        Someone who wants to make Backend for FREE of COST. 
                                        Have some idea on backend web development 
                                        Want to explore various AWS certifications 
                                            Want to design highly available and concurrent REST API backend
                                </p>
                                    </div>

                                </div>
                                <div className="about-inner-box">
                                    <div className="about-box-img">
                                        <img src={faqImg3} alt="" srcset="" />
                                    </div>
                                    <div className="about-box-heading">
                                                <h5>Q.What will you learn from this course?</h5>
                                    </div>
                                    <div className="about-box-para">
                                <p>Create totally serverless backend 
                                    100% free of cost REST API development
                                    Learning fundamental AWS services 
                                    The strength of serverless application
                                        </p>
                                    </div>

                                </div>
                                <div className="about-inner-box">
                                    <div className="about-box-img">
                                        <img src={faqImg1} alt="" srcset="" />
                                    </div>
                                    <div className="about-box-heading">
                                                <h5>Q.What is the course culture?</h5>
                                    </div>
                                    <div className="about-box-para">
                                <p>2 days per week live session.
                                    Chance to expose yourself to achieve a good career.
                                    Every session has Hands-on and live coding with the instructor.
                                    Assignment to ensure your learning effectiveness.
                                    Career guide to become a good AWS practitioner.
                                            Q&A session on each lecture
                                        </p>
                                    </div>

                                </div>

                                </div>
                            <div className="about-box-2nd-line">
                            <div className="about-inner-box">
                                    <div className="about-box-img">
                                        <img src={faqImg2} alt="" srcset="" />
                                    </div>
                                    <div className="about-box-heading">
                                                <h5>Q.Where do you apply your knowledge of this course?</h5>
                                    </div>
                                    <div className="about-box-para">
                                <p>This course is like a gateway to enter AWS world
                                        Many companies are actively looking for AWS experts 
                                        Your knowledge will help any company to build REST APIs.
                                     </p>
                                    </div>

                                </div>
                                <div className="about-inner-box">
                                    <div className="about-box-img">
                                        <img src={faqImg3} alt="" srcset="" />
                                    </div>
                                    <div className="about-box-heading">
                                                <h5>Q.Prerequisite of this course</h5>
                                    </div>
                                    <div className="about-box-para">
                                <p>At Least 1 year of web development experience on Backend
                                        Dual currency Credit/Debit/Prepaid card
                                            High quality internet speed
                                        </p>
                                    </div>

                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                <div className="contact-us">
                            <Contact2 />
                </div>
                    </div>
        </>
            

    )
}

export default skill

