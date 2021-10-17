import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";

const LandingComponent = () => {
    return (
        <React.Fragment>
            <div className="landing__cont">
                <div className="landing__bg">
                    <div className="landing__sec_1"></div>
                    <div className="landing__sec_2"></div>
                </div>
                <div className="landing__overlay">
                    <div className="d-grid w-100 h-100">
                        <div className="landing__image">
                            <Image 
                                src="/images/banner1.jpg" 
                                layout="fill" 
                                loading="lazy"
                                objectFit="cover" 
                                alt="SpicyDeli" />
                        </div>
                        <div className="landing__image__overlay px-5 ">
                            <h1 className="anim__text text__1">Wellcome to my website!</h1>
                            <br />
                            <h1 className="anim__text text__2">What would you like to have?</h1>
                            <br />
                            <div className="lines__1"></div>
                            <div className="lines__2"></div>
                            <h1 className="anim__text text__3 fancy__title">Thankyou</h1>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom__cont">
                <div className="landing__footer">
                    <p className="my-auto book__a__table">Book A Table</p>
                    <div className="d-flex ml-auto">
                        <p className="px-3 m-auto get__in__touch">Get in Touch</p>
                        <span className="px-2">
                            <IconButton className="icon_bg">
                                <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                            </IconButton>
                        </span>
                        <span className="px-2">
                            <IconButton className="icon_bg">
                                <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                            </IconButton>
                        </span>
                        <span className="px-2">
                            <IconButton className="icon_bg">
                                <img className="social_icon" src="/app-icons/instagram.png" height="14px" width="14px" />
                            </IconButton>
                        </span>
                        <span className="px-2">
                            <IconButton className="icon_bg">
                                <img className="social_icon" src="/app-icons/youtube.png" height="14px" width="14px" />
                            </IconButton>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LandingComponent;
