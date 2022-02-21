import React from 'react';
import "./button.scss";

const Button = () => {
    return (
        <div className='container'>
            <div className='kit-container'>
                {/* small */}
                <div className="col-12">  {/* solid btn */}
                    <button className='effect-btn btn-small btn-primary'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-success'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-dark'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-brown rounded'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-info rounded-0'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-white'>Book Free Demo</button>
                </div>
                <div className="col-12">  {/* solid btn */}
                    <button className='effect-btn btn-rounded btn-info'>Wifi
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                    </button>
                    <button className='effect-btn btn-rounded btn-gradient'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                    <button className='effect-btn btn-rounded btn-gradient'>Discover</button>
                </div>
                <div className="col-12">   {/* outline btn */}
                    <button className='effect-btn btn-small btn-outline-primary'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-outline-success'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-outline-dark'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-outline-brown rounded'>Book Free Demo</button>
                    <button className='effect-btn btn-small btn-outline-info rounded-0'>Book Free Demo</button>
                </div>
                <div className='col-12'>   {/* gradient btn */}
                    <button className='effect-btn btn-small btn-gradient'>Book Free Demo</button>
                    <button className='effect-btn btn-small rounded btn-gradient'>Book Free Demo</button>
                    <button className='effect-btn btn-small rounded-0 btn-gradient'>Book Free Demo</button>
                </div>

                {/* large btn */}
                <div className='col-12'>
                    <button className='effect-btn btn-lg btn-gradient'>Discover Community</button>
                    <button className='effect-btn btn-lg btn-outline-primary'>Outline Button</button>
                    <button className='effect-btn btn-lg btn-text-brown'>text button</button>
                    <button className='effect-btn btn-lg rounded btn-gradient'>Discover Community</button>
                    <button className='effect-btn btn-lg rounded-0 btn-gradient'>Discover Community</button>
                </div>

                {/* extra large */}
                <div className='col-12'>
                    <button className='effect-btn btn-block btn-gradient'>Discover Community</button>
                    <button className='effect-btn btn-block btn-info'>Discover Community</button>
                    <button className='effect-btn btn-block btn-outline-primary'>Discover Community</button>
                    <button className='effect-btn btn-block btn-dark'>Discover Community</button>
                    <button className='effect-btn btn-block btn-success'>Discover Community</button>
                    <button className='effect-btn btn-block btn-brown rounded'>Discover Community</button>
                    <button className='effect-btn btn-block rounded btn-outline-success'>Discover Community</button>
                    <button className='effect-btn btn-block rounded-0  btn-gradient'>Discover Community</button>
                </div>

                {/* icon button */}

                <div className='col-12'>
                    <button className='effect-btn btn-lg rounded btn-gradient' >Click me<span className='btn-icon'>&#10148;</span></button>
                    <button className='effect-btn btn-lg rounded btn-outline-primary' >Outline btn<span className='btn-icon'>&#9883;</span></button>
                    <button className='effect-btn btn-lg rounded btn-text-success' >Outline btn<span className='btn-icon'>&#8680;</span></button>
                    <button className='effect-btn btn-lg rounded-0 btn-gradient' >Outline btn<span className='btn-icon'>&#8669;</span></button>
                </div>

                <div className='col-12'>
                    <h2>simple button without effect</h2>
                </div>


                <div className="col-12">  {/* solid btn */}
                    <button className='simple-btn btn-small btn-primary'>Book Free Demo</button>
                    <button className='simple-btn btn-small btn-success'>Book Free Demo</button>
                    <button className='simple-btn btn-small btn-dark'>Book Free Demo</button>
                    <button className='simple-btn btn-small btn-brown rounded'>Book Free Demo</button>
                    <button className='simple-btn btn-small btn-info rounded-0'>Book Free Demo</button>
                    <button className='simple-btn btn-small btn-white'>Book Free Demo</button>
                </div>
                <div className="col-12">
                    <button className='simple-btn btn-small btn-outline-dark' >Outline btn</button>
                    <button className='simple-btn btn-small btn-primary rounded-0' >Outline btn</button>
                    <button className='simple-btn btn-small rounded btn-success' >Outline btn</button>
                    <button className='simple-btn btn-small rounded-0 btn-text btn-gradient' >Outline btn</button>
                </div>

                <div className="col-12">
                    <button className='simple-btn btn-lg btn-outline-dark' >Outline btn</button>
                    <button className='simple-btn btn-lg rounded-0 btn-brown' >Outline btn</button>
                    <button className='simple-btn btn-lg rounded btn-success' >Outline btn</button>
                    <button className='simple-btn btn-lg rounded-0 btn-text btn-gradient' >Outline btn</button>
                </div>
                <div className="col-12">  {/* solid btn */}
                    <button className='simple-btn btn-rounded btn-info'>Wifi
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                    </button>
                    <button className='simple-btn btn-rounded btn-gradient'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                    <button className='simple-btn btn-rounded btn-gradient'>Discover</button>
                </div>

                <div className='col-12'>
                    <button className='simple-btn btn-lg rounded btn-gradient' >Click me<span className='btn-icon'>&#10148;</span></button>
                    <button className='simple-btn btn-lg rounded btn-outline-primary' >Outline btn<span className='btn-icon'>&#9883;</span></button>
                    <button className='simple-btn btn-lg rounded btn-text-success' >Outline btn<span className='btn-icon'>&#8680;</span></button>
                    <button className='simple-btn btn-lg rounded-0 btn-gradient' >Outline btn<span className='btn-icon'>&#8669;</span></button>
                </div>

                <div className='col-12'>
                    <button className='simple-btn btn-block btn-gradient'>Discover Community</button>
                    <button className='simple-btn btn-block btn-info'>Discover Community</button>
                    <button className='simple-btn btn-block btn-outline-primary'>Discover Community</button>
                    <button className='simple-btn btn-block btn-dark'>Discover Community</button>
                    <button className='simple-btn btn-block btn-success'>Discover Community</button>
                    <button className='simple-btn btn-block btn-brown rounded'>Discover Community</button>
                    <button className='simple-btn btn-block rounded btn-outline-success'>Discover Community</button>
                    <button className='simple-btn btn-block rounded-0  btn-gradient'>Discover Community</button>
                </div>

            </div>
        </div>
    )
}

export default Button;