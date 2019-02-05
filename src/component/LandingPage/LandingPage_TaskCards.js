import React, { Component } from 'react';
import Slider from 'react-slick';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

export default class LandingPage_TaskCards extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,

        }
        return (
            <div className='TaskCards-component'>
                <h1>Popular Tasks</h1>
                <Slider {...settings}>
                    <div className='card'>
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbJXhJ5sjfgHX_BrXgdbCXwj9A0dQJon42v3eqDN9ryux0Ucs7g'/>
                        </div>
                        <div>
                            <button>Mounting & Installation</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://img.freepik.com/free-vector/truck-delivery-service-icon_24877-24828.jpg?size=338&ext=jpg' />
                        </div>
                        <div>
                            <button>Delivery Service</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://www.cmogroup.org/wp-content/uploads/2018/04/gardening.png' />
                        </div>
                        <div>
                            <button>Yardwork/Landscaping</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='http://www.wahmresourcesite.com/wp-content/uploads/2012/01/Do-it-yourself-Home-Improvement2.jpg' />
                        </div>
                        <div>
                            <button>Home Improvement</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://www.noragouma.com/wp-content/uploads/2017/06/moving-1050x700.jpg' />
                        </div>
                        <div>
                            <button>Moving & Packing</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://visitoceanside.org/wp-content/uploads/2013/07/dog-ready-for-walk.jpg' />
                        </div>
                        <div>
                            <button>Pet Service</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopO0yv2_MUryzkJ4kqkGDASRJbRcQBQp77e8w8GFfZctzq8s_' />
                        </div>
                        <div>
                            <button>Furniture Assembly</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='https://mackmaids.com/wp-content/uploads/2018/02/Why-Hire-a-Cleaning-Service-During-Your-Spouse%E2%80%99s-Deployment-1024x639.jpg' />
                        </div>
                        <div>
                            <button>Cleaning Service</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src='data:image/jpeg;base64,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' />
                        </div>
                        <div>
                            <button>Cooking Service</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}