import React from "react";
import CustomHead from "../components/head";
import Img from "../components/Img";
import Footer from "../container/Footer";
import Header from "../container/Header";
import FoodGallery from "../container/Homepage/FoodGallery";
import OurHistory from "../container/Homepage/OurHistory";
import OurtTeam from "../container/Homepage/OurtTeam";
import * as Config from "../utils/Config";
import { MenuTypes } from "../utils/types";

const AboutPage = () => {
    return (
        <React.Fragment>
            <CustomHead title={`About | ${Config.APP_NAME}`}></CustomHead>
            <div className="about__page">
                <Header activeTab={MenuTypes.ABOUT}></Header>
                <div className="about__container mh-100vh  bg-white text-dark">
                    <div className="about_page_header d-flex justify-content-center align-items-center vh-20">
                        <h1>About SpicyDeli</h1>
                    </div>
                    <div className="about__welcome__cont">
                        <div className="left d-flex py-5 w-40">
                            <Img src="/images/pizza.jpg" height="100%" width="100%" />
                        </div>
                        <div className="right py-5 w-60 px-3">
                            <h2 className="py-4 fancy__title">Wellcome to SpicyDeli</h2>
                            <span className="line__2"></span>
                            <h1>We are a modern Italian restaurant in the center of the city</h1>
                            <p className="welcome__desc">
                                We would like to take this opportunity to welcome you to our restaurant. We guarantee you the freshest food, delivered
                                daily to our dock, prepared to your liking. We can prepare a specific meal by request. All our locations are providing
                                a wonderful open-air venue to enjoy the meal all year round, we offer both indoor and alfresco dining and our focus is
                                on serving.
                            </p>
                            <h4 className="book_table_text primary_text_dark w-fit-content py-3">Book A Table</h4>
                        </div>
                    </div>
                    <OurHistory />
                    <OurtTeam />

                    <FoodGallery />
                </div>
                <Footer></Footer>
            </div>
            <style>{`
                .about_page_header{
                  background-color: #F1EFE8;
                  color: var(--dark);
                }
                .about_page_header h1{
                  font-size: 5vw;
                }
                
                .about__welcome__cont{
                  width: 100%;
                  display: flex;
                }
                
                .about__welcome__cont .left img{
                  width: 80%;
                  margin: auto;
                  object-fit: cover;
                  min-height: 66vh;
                }
                
                .about__welcome__cont .right h2{
                  font-size: 2vw;
                  position: relative;
                }
                .about__welcome__cont .right .line__2{
                  position: relative;
                }
                
                
                .about__welcome__cont .right h2::after{
                  position: absolute;
                  content: '';
                  bottom: 20px;
                  left: 0;
                  width: 80px;
                  height: 2px;
                  background-color: var(--primary_text);
                }
                
                .about__welcome__cont .right .line__2::after{
                  position: absolute;
                  content: '';
                  bottom: 21px;
                  left: 0;
                  width: 50px;
                  height: 2px;
                  background-color: var(--primary_text);
                }
                .about__welcome__cont .right h1{
                  font-size: 6vw;
                }
                .book_table_text{
                  border-bottom: 1px solid var(--primary_text_dark);
                }
                .our__history__overlay{
                  background-color: #000000a1 !important;
                }
                .check_our_gallery{
                  background-color: var(--dark_bg);
                }
            `}</style>
        </React.Fragment>
    );
};

export default AboutPage;
