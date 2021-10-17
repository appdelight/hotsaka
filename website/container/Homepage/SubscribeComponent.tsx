import React from "react";
import Img from "../../components/Img";

const SubscribeComponent = () => {
    return (
        <React.Fragment>
            <div className="welcome_container text-dark bg-white py-3">
                <div className="container text-dark my-5">
                        <span className="col-12 py-4 fancy__title px-0">blog feed</span>
                        <h1 className="blog_cont_text">
                            Behind the scenes of the best <br />
                            pizza and pasta
                        </h1>
                    <div className="welcome_cont_main m-0">
                        <div className="part1 mr-3">
                            <Img
                                src="/images/egg_bread.jpg"
                                height="auto"
                                width="100%"
                            />
                            <p className="">Nov 18, 2017, Saturday</p>
                            <h3>
                                Seven Secrets That You Shouldn’t Know About
                                Restaurants
                            </h3>
                            <br />
                            <div className="contacts">
                                <h3>Contacts</h3>
                                <div className="bg-dark p-4 text-white contact-text">
                                    <h3>Never Miss a Post! Stay Tuned</h3>
                                    <div className="hp__subs mb-2">
                                        <input
                                            style={{
                                                width: "100%",
                                            }}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="example@gmail.com"
                                        />
                                        {/* <button className="btn-link"> */}
                                            <h3 className="primary_text p-2 text-underline">Subscribe</h3>
                                        {/* </button> */}
                                    </div>
                                    
                                    <div className="d-flex">
                                    <input
                                        name="policy_check"
                                        type="checkbox"
                                        id="policy"
                                        className="mt-1"
                                    />
                                    <label className="pl-2" htmlFor="policy">
                                        I have read and agree to the Privacy
                                        Policy
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="part2">
                            <Img
                                className="mb-4 object-fit-cover"
                                src="/images/daal.jpg"
                                height="auto"
                                width="100%"
                            />
                            <p className="">Nov 18, 2017, Saturday</p>
                            <h3>Johnny Cash Has The Answer To Everything</h3>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SubscribeComponent;
