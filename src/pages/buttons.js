import React from 'react';
import "./button.scss";

const Button = () => {
    return (
        <div className='container'>
            <div className='kit-container'>
                {/* small */}
                <div className='col-12'>
                    <button className='effect-btn btn-small'>Book Free Demo</button>
                    <button className='effect-btn btn-sm-outline'>Outline Button</button>
                    <button className='effect-btn btn-sm-text'>text button</button>
                    <button className='effect-btn btn-small rounded'>Book Free Demo</button>
                    <button className='effect-btn btn-small rounded-0'>Book Free Demo</button>
                </div>

                {/* large btn */}
                <div className='col-12'>
                    <button className='effect-btn btn-lg'>Discover Community</button>
                    <button className='effect-btn btn-lg-outline'>Outline Button</button>
                    <button className='effect-btn btn-lg-text'>text button</button>
                    <button className='effect-btn btn-lg rounded'>Discover Community</button>
                    <button className='effect-btn btn-lg rounded-0'>Discover Community</button>
                </div>

                {/* extra large */}
                <div className='col-12'>
                    <button className='effect-btn btn-block'>Discover Community</button>
                    <button className='effect-btn btn-block rounded'>Discover Community</button>
                    <button className='effect-btn btn-block-outline'>Discover Community</button>
                    <button className='effect-btn btn-block rounded-0'>Discover Community</button>
                </div>

                {/* icon button */}

                <div className='col-12'>
                    <button className='effect-btn btn-lg rounded' >Click me<span className='btn-icon'>&#10148;</span></button>
                    <button className='effect-btn btn-lg-outline rounded' >Outline btn<span className='btn-icon'>&#9883;</span></button>
                    <button className='effect-btn btn-lg-text rounded' >Outline btn<span className='btn-icon'>&#8680;</span></button>
                    <button className='effect-btn btn-lg rounded-0' >Outline btn<span className='btn-icon'>&#8669;</span></button>
                </div>


                <div className="col-12">
                    <button className='simple-btn ' >Outline btn</button>
                    <button className='simple-btn btn-outline' >Outline btn</button>
                    <button className='simple-btn rounded' >Outline btn</button>
                    <button className='simple-btn rounded-0 btn-text' >Outline btn</button>
                </div>
               
            </div>
        </div>
    )
}

export default Button;