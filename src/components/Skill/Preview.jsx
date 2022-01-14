import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ModalVideo1 from 'react-modal-video'
import ModalVideo2 from 'react-modal-video'
import ModalVideo3 from 'react-modal-video'
import "./skill.css"
import 'react-modal-video/scss/modal-video.scss';
function Preview()
{   
    const [isOpen, setOpen] = useState(false)
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
         return (
                <>
                    <div className="preview-content">
                        <div className="preview-heading">
                            <h3>Preview Content</h3>
                     </div>
                     <div className="preview-box">
                 
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
                                ✅ SERVERLESS 
                                </button></h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <p className="video-button" data-bs-toggle="modal" >
                <React.Fragment>
		        <ModalVideo1 channel='youtube' autoplay isOpen={isOpen1} videoId="UxPkK8gW0hs" onClose={() => setOpen1(false)} />
                <button className="btn video-button" onClick={()=> setOpen1(true)}> <i className="fas fa-play-circle"></i>  VIDEO: What is serverless? </button>
                </React.Fragment>
                        </p>
                <div className="body">
                    <p><i class="fas fa-play-circle"></i>  How does serverless scale?</p>
                </div>
            </div>
        </div>
    </div>
                             
                             {/* 2nd item  */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                ✅ LAMBDA
                                </button></h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="video-button" data-bs-toggle="modal modal-lg" data-bs-target="#staticBackdrop2" >
                            <React.Fragment>
		        <ModalVideo2 channel='youtube' autoplay isOpen={isOpen2} videoId="LIXcyGW2YDM" onClose={() => setOpen2(false)} />
                <button className="btn video-button" onClick={()=> setOpen2(true)}> <i className="fas fa-play-circle"></i>  VIDEO: What is serverless? </button>
                </React.Fragment>
                            </p>
                <div className="body">
                                            <p><i class="fas fa-file"></i>  Lambda 101</p> 
                                            <p><i class="fas fa-file"></i>  Creating a lambda function </p> 
                                            <p className='py'> 1.Python 3.8</p>
                                            <p className='py'> 2.Nodejs 10x</p> 
                                            <p><i class="fas fa-file"></i> Understanding lambda event</p>  
                                            <p><i class="fas fa-file"></i>  Accessing lambda’s log</p>  
                                            <p><i class="fas fa-file"></i>  Create a test payload for testing</p>  
                                            <p><i class="fas fa-file"></i>  Run and test a lambda function from AWS console</p>  
                                            <p><i class="fas fa-file"></i>   Assign IAM role to grant permission to lambda</p>  
                </div>
            </div>
        </div>
                             </div>
                             {/* item 3  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                                ✅ API GATEWAY 
                                </button></h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn video-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                        {/* VIDEO: What is serverless?  */}
                        </button>
                    
                        <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></   button>
                                </div>
                                <div class="modal-body">
                                <ReactPlayer url="https://www.youtube.com/watch?v=oluY633rkgI" controls={true} height="100%" width="100%"/>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                                            <p><i class="fas fa-file"></i>  API Gateway 101</p> 
                                            <p><i class="fas fa-file"></i>  Create a REST API  </p> 
                                            <p><i class="fas fa-file"></i>  Create a resource and method</p>
                                            <p><i class="fas fa-file"></i>  Integrate lambda with a method</p> 
                                            <p><i class="fas fa-file"></i>  Lambda proxy integration</p>  
                                            <p><i class="fas fa-file"></i>  Enable CORS</p>  
                                            <p><i class="fas fa-file"></i>  Deploy APIs on dev staging</p>  
                                            <p><i class="fas fa-file"></i>  Test API via Postman</p>  
                </div>
            </div>
        </div>
                             </div>
                             {/* item 4  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                ✅ DynamoDB
                                </button></h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn video-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                        {/* <i class="fas fa-file"></i>  VIDEO: What is serverless?  */}
                        </button>
                    
                        <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></   button>
                                </div>
                                <div class="modal-body">
                                <ReactPlayer url="https://www.youtube.com/watch?v=oluY633rkgI" controls={true} height="100%" width="100%"/>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                                            <p><i class="fas fa-file"></i>  What is dynamodb?</p> 
                                            <p><i class="fas fa-file"></i>  Create a table  </p> 
                                            <p><i class="fas fa-file"></i>  Create a record manually </p>
                                            <p><i class="fas fa-file"></i>  Connect lambda to dynamodb by boto3</p> 
                                            <p><i class="fas fa-file"></i>  CRUD operation on dynamodb table</p>  
                                            <p><i class="fas fa-file"></i>  Test API via postman</p>  
                                            
                </div>
            </div>
        </div>
                             </div>
                             {/* item 5  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                ✅ BENCHMARK 
                                </button></h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn video-button " data-bs-toggle="modal" data-bs-target="#staticBackdrop5">
                        {/* VIDEO: What is serverless?  */}
                        </button>
                    
                        <div class="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></   button>
                                </div>
                                <div class="modal-body">
                                <ReactPlayer url="https://www.youtube.com/watch?v=oluY633rkgI" controls={true} height="100%" width="100%"/>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                                            <p><i class="fas fa-file"></i>  Apply load and stress test on API </p> 
                                            <p><i class="fas fa-file"></i>  Create python script to create 1000 concurrent POST requests  </p> 
                                            <p><i class="fas fa-file"></i>  Change various parameters  </p>
                                            <p><i class="fas fa-file"></i>  Observe how serverless scale out on-demand</p> 
                </div>
            </div>
        </div>
                             </div>
                             {/* item 6  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                ✅ WHAT'S NEXT
                                </button></h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop6">
                        {/* VIDEO: What is serverless?  */}
                        </button>
                    
                        <div class="modal fade" id="staticBackdrop6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></   button>
                                </div>
                                <div class="modal-body">
                                <ReactPlayer url="https://www.youtube.com/watch?v=oluY633rkgI" controls={true} height="100%" width="100%"/>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                                            <p><i class="fas fa-file"></i>  Designing microservices  </p> 
                                            <p><i class="fas fa-file"></i>  Monitoring and logging    </p> 
                                            <p><i class="fas fa-file"></i>  Change various parameters  </p>
                                            <p><i class="fas fa-file"></i>  Observe how serverless scale out on-demand</p> 
                </div>
            </div>
        </div>
                             </div>
                
                             </div>
                             
                             
</div>
</div> 
                            </>
                        )
                    }
                    
                    export default Preview
