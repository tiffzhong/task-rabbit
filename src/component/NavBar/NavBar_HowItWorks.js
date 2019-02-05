import React from 'react';
import "./NavBar.css"
import NavBar from "./NavBar";



const NavBar_HowItWorks = () => {
    return (
        <div>
            <div className="fullpage">
                <div className="wholeitems">
                    <h1>How It Works</h1>

                    <div className="firstitem">
                        <div className="firstparagraph">
                            {/* <h3>1</h3> */}
                            <p>1. Describe the task</p>
                            <div className="words">Choose from a variety of home services and select the day and time you'd like a qualified Tasker to show up. Give us the details and we'll find you the help.
                            </div>
                        </div>
                        <div className="firstimage">
                            <img src="/Images/HowItWorks_Describe.jpg" alt="how" /> </div>
                    </div>

                    <div className="seconditem">
                        <div className="secondimage">
                            <img src="/Images/Electrician.jpg" alt="electrican" />
                        </div>
                        <div className="secondparagraph">
                            {/* <h3>2</h3> */}
                            <p> 2. Get matched</p>
                            <div className="words">Select from a list of qualified and fully vetted Taskers for the job. Choose Taskers by their hourly rate and start chatting with them right in the app.
                            </div>
                        </div>
                    </div>
                    <div className="thirditem">
                        <div className="thirdparagraph">
                            {/* <h3>3</h3> */}
                            <p> 3. Get it done</p>
                            <div className="words">Just like that, your Tasker arrives and gets the job done. When your task is complete, payment will happen seamlessly and securely through the app.
                            </div>
                        </div>
                        <div className="thirdimage">
                            <img src="/Images/Checklist.jpg" alt="list" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NavBar_HowItWorks;