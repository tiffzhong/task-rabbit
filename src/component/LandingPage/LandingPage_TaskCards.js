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
            Popular Tasks
                <Slider {...settings}>
                    <div className='card'>
                        
                    </div>
                    <div className='card'>
                        <h3>2</h3>
                    </div>
                    <div className='card'>
                        <h3>3</h3>
                    </div>
                    <div className='card'>
                        <h3>4</h3>
                    </div>
                    <div className='card'>
                        <h3>5</h3>
                    </div>
                    <div className='card'>
                        <h3>6</h3>
                    </div>
                    <div className='card'>
                        <h3>7</h3>
                    </div>
                    <div className='card'>
                        <h3>8</h3>
                    </div>
                    <div className='card'>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}