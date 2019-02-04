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
                <Slider {...settings}>
                    <div className='card'>
                        <h3>Hello</h3>
                        {/* <img src='data:image/jpeg;base64,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' /> */}
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