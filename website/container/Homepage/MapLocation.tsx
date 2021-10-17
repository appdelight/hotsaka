import React from "react";

const MapLocation = () => {
    return (
        <React.Fragment>
        <div className="map__location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497692.07422627!2d75.34110707859635!3d31.117654706629974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a670d9454e759%3A0xa62b03b2fbc08188!2sThe%20Italian%20wings!5e0!3m2!1sen!2sin!4v1631910932158!5m2!1sen!2sin"
                style={{
                    border:0,
                    width:"100vw",
                    height:"600px"
                }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
        <style>{`
            .map__location{
                // border: 1px solid #fff;
                // background-color: var(--dark_bg)
            }
        `}</style>
                </React.Fragment>
    );
};

export default MapLocation;
