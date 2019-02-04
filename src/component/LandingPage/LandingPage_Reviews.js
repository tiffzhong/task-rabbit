import React from 'react';
import "./LandingPage.css"



const LandingPage_Reviews = () => {
    return (
        <div className="reviewsContainer">
            <h1>Real People, Real Tasks</h1>
            <div className="reviews">
                <div>
                    <div><img src="Images/sean.jpg" /></div>
                    <div><p>Using TaskTiger to have a new bookcase built was a great choice! Rick did wonderful work with a job that was much bigger than we anticipated.
                <div>Sean P.</div>
                        <div>Tampa, FL </div>
                    </p></div></div>
            </div>
            <div className="reviews">

                <div>   <div><img src="Images/hunter.jpg" /></div> <div><p>I'd been agonizing over how to get my new flat screen mounted to my wall. Nick arrived the same day with all the tools for the job and was just a super nice guy.
                    <div>Hunter C</div>
                    <div>Scottsdale, AZ</div>
                </p></div>
                </div>
            </div>
            <div className="reviews">

                <div> <div><img src="Images/michael.jpg" /></div><div><p>I finally have expertly installed shelves and additional storage in my tiny house, all thanks to my Tasker.
                <div> Michael K </div>
                    <div>Phoenix, AZ</div>
                </p></div></div>
            </div>

            <div className="reviews">
                <div> <div><img src="Images/josh.jpg" /></div> <div><p>TaskTiger makes moving into your new apartment a 1 hr job instead of 1 day job! Moving was seamless!
                    <div>Josh B</div>
                    <div>Mesa, AZ</div>
                </p></div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage_Reviews;