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
                                        <button className="btn btn-danger" onClick={handleOnClick}>{trunked ? "Show All" : "Show less"} </button>
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
                                                                    
                                                 {/* <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        Accordion Item #1
                                                    </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=wqb0kaRdyyA" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> 
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Class 1: কীভাবে ইংরেজিতে নিজেকে Introduce করবেন
                                                    </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                                    video: Box shadow
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=oluY633rkgI" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                                                             {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                    
                    
                                    {/* item 3  */}
                    
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Class 2: কীভাবে ইংরেজিতে একজন নতুন ব্যক্তির সাথে পরিচিত হবেন
                                                    </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=wqb0kaRdyyA" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                    Class 3: ইংরেজিতে প্রশ্ন করা শিখুন
                                                    </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=iyj3TZXg2gQ" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    Class 4: Parts of Human Body in English
                                                    </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="heading6">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                        Accordion Item #6
                                                    </button>
                                                    </h2>
                                                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop6">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="heading7">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                        Accordion Item #7
                                                    </button>
                                                    </h2>
                                                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop7">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop7" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="heading8">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                        Accordion Item #8
                                                    </button>
                                                    </h2>
                                                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop8">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop8" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingNine">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                        Accordion Item #9
                                                    </button>
                                                    </h2>
                                                    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop9">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop9" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTen">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                        Accordion Item #10
                                                    </button>
                                                    </h2>
                                                    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop10">
                                                    video: React Crash Course 
                                                    </button>
                    
                                                    <div class="modal fade" id="staticBackdrop10" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">React media player</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                           <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" controls={true} height="100%" width="100%"/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                                        </div>
                                                        </div>
                                                        </div>
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