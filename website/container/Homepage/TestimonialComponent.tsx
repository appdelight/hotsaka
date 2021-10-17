import React from "react";
import Img from "../../components/Img";

const TestimonialComponent = () => {
    return (
        <React.Fragment>
            <div className="testimonial_container">
                <div className="grid_container">
                    <Img
                        className="grid_container_img object-fit-cover"
                        src="/images/chicken.jpg"
                        height="auto"
                        width="100%"
                    />
                    <div className="grid_contents d-flex align-items-center">
                        <div className="container px-5">
                            <div className="text-white tc__text">
                                <h1>Giardino Evokes the</h1>
                                <h1>Generosity, Humor and</h1>
                                <h1>Simplicity of Italy</h1>
                            </div>
                            <i className="fancy__title">real taste of Italy</i>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TestimonialComponent;
