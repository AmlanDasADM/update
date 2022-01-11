import React, { useState } from 'react'
import ReactPlayer from 'react-player'

                        
                    function LoadMore({ children = 4 })
                    {
                        const text = children 
                        const [trunked, setTrunked] = useState(true)
                        const resultString = trunked ? text.slice(0, 4) : text;
                         const handleOnClick = () =>
                        {
                            setTrunked(!trunked)
                        }
                        return (
                            <div className="collapsed-div-preview">
                                <p className='has-text-left'>
                                {resultString}
                                    <div className="button">
                                        <button className="btn-3" onClick={handleOnClick}>{trunked ? "Show All" : "Show less"} </button>
                                    </div>
                                </p>
                            </div>    
                        )
                    }
                    
function Preview()
        {              
         return (
                <>
                    <div className="preview-content">
                        <div className="preview-heading">
                            <h3>Preview Content</h3>
                     </div>
                     <div className="preview-box">
                        <LoadMore class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
                                ✅ SERVERLESS 
                                </button></h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn video-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                        🧿 VIDEO: What is serverless? 
                        </button>
                    
                        <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <p>🧿 How does serverless scale?</p> 
                </div>
            </div>
        </div>
    </div>
                             
                             {/* 2nd item  */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                ✅ LAMDA
                                </button></h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                <button type="button" class="btn video-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                🧿 VIDEO: What is serverless? 
                                </button>
                            </p>
                        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                            <p>🧿 Lambda 101</p> 
                                            <p>🧿 Creating a lambda function </p> 
                                            <p className='py'> 1.Python 3.8</p>
                                            <p className='py'> 2.Nodejs 10x</p> 
                                            <p>🧿Understanding lambda event</p>  
                                            <p>🧿 Accessing lambda’s log</p>  
                                            <p>🧿 Create a test payload for testing</p>  
                                            <p>🧿 Run and test a lambda function from AWS console</p>  
                                            <p>🧿  Assign IAM role to grant permission to lambda</p>  
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
                                            <p>🧿 API Gateway 101</p> 
                                            <p>🧿 Create a REST API  </p> 
                                            <p>🧿 Create a resource and method</p>
                                            <p>🧿 Integrate lambda with a method</p> 
                                            <p>🧿 Lambda proxy integration</p>  
                                            <p>🧿 Enable CORS</p>  
                                            <p>🧿 Deploy APIs on dev staging</p>  
                                            <p>🧿 Test API via Postman</p>  
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
                        {/* 🧿 VIDEO: What is serverless?  */}
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
                                            <p>🧿 What is dynamodb?</p> 
                                            <p>🧿 Create a table  </p> 
                                            <p>🧿 Create a record manually </p>
                                            <p>🧿 Connect lambda to dynamodb by boto3</p> 
                                            <p>🧿 CRUD operation on dynamodb table</p>  
                                            <p>🧿 Test API via postman</p>  
                                            
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
                                            <p>🧿 Apply load and stress test on API </p> 
                                            <p>🧿 Create python script to create 1000 concurrent POST requests  </p> 
                                            <p>🧿 Change various parameters  </p>
                                            <p>🧿 Observe how serverless scale out on-demand</p> 
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
                                            <p>🧿 Designing microservices  </p> 
                                            <p>🧿 Monitoring and logging    </p> 
                                            <p>🧿 Change various parameters  </p>
                                            <p>🧿 Observe how serverless scale out on-demand</p> 
                </div>
            </div>
        </div>
                             </div>
                      
 </LoadMore>
</div>
</div> 
                            </>
                        )
                    }
                    
                    export default Preview