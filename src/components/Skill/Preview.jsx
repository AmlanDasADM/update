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
                                Serverless
                                </button></h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                        VIDEO: What is serverless? 
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
                    <p>How does serverless scale?</p> 
                </div>
            </div>
        </div>
    </div>
                             
                             {/* 2nd item  */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Serverless
                                </button></h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                        VIDEO: What is serverless? 
                        </button>
                    
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
                    <p>How does serverless scale?</p> 
                </div>
            </div>
        </div>
                             </div>
                             {/* item 3  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                                Serverless
                                </button></h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                        VIDEO: What is serverless? 
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
                    <p>How does serverless scale?</p> 
                </div>
            </div>
        </div>
                             </div>
                             {/* item 4  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Serverless
                                </button></h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                        VIDEO: What is serverless? 
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
                    <p>How does serverless scale?</p> 
                </div>
            </div>
        </div>
                             </div>
                             {/* item 5  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Serverless
                                </button></h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">
                        VIDEO: What is serverless? 
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
                    <p>How does serverless scale?</p> 
                </div>
            </div>
        </div>
                             </div>
                             {/* item 6  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Serverless
                                </button></h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop6">
                        VIDEO: What is serverless? 
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
                    <p>How does serverless scale?</p> 
                </div>
            </div>
        </div>
                             </div>
                             {/* item 7  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Serverless
                                </button></h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop7">
                        VIDEO: What is serverless? 
                        </button>
                    
                        <div class="modal fade" id="staticBackdrop7" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <p>How does serverless scale?</p> 
                </div>
            </div>
        </div>
                             </div>
                             {/* item 7  */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingEight">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Serverless
                                </button></h2>
                            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop8">
                        VIDEO: What is serverless? 
                        </button>
                    
                        <div class="modal fade" id="staticBackdrop8" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <p>How does serverless scale?</p> 
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