import React, { Component } from 'react';

export default class LandingPage_TaskCards extends Component {
    render() {
        return (
            <div className='TaskCards-component'>
            TaskCards
                <div className='taskCards-container'>
                    <div className='container-wide'>
                        <div className='row-thin'>
                            <h2 className='static-title secondary-heading'>Popular Tasks</h2>
                                <div className='carousel-container'>
                                    <div className='carousel-navigate-prev'>
                                        <i className='ss-lnr-chevron-left'>
                                            
                                        </i>
                                    </div>
                                    <div className='carousel-task-container'>
                                        <span className='task'>
                                            {/* <img />
                                            <button></button> */}
                                            <div></div>
                                            <div>
                                                <span>Hello</span>
                                            </div>
                                            <div></div>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                        <span className='task'>
                                            <img />
                                            <button></button>
                                        </span>
                                    </div>
                                    <div className='carousel-navigate-next'>
                                        <i className='chevron-right'></i>
                                    </div>
                                </div>
                            
                        </div> 
                    </div>
               </div>
            </div>
        );
    }
}