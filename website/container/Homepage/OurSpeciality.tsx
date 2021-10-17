import React from "react";
import Img from "../../components/Img";

const OurSpeciality = () => {
    return (
        <React.Fragment>
            <div className="our_spcl_cont py-4">
                <div className="container text-center">
                    <h1 className="mx-auto my-5">Our Speciality</h1>
                    <div className="our_specilities col-12 row m-0">
                        <div className="col-md-4 text-center">
                            <Img
                                src="/icons/food_icon.png"
                                height="100px"
                                width="100px"
                                className="mb-2"
                            />
                            <h4>Food Quality</h4>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <Img
                                src="/icons/food_icon.png"
                                height="100px"
                                width="100px"
                                className="mb-2"
                            />
                            <h4>Food Quality</h4>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <Img
                                src="/icons/food_icon.png"
                                height="100px"
                                width="100px"
                                className="mb-2"
                            />
                            <h4>Food Quality</h4>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OurSpeciality;
