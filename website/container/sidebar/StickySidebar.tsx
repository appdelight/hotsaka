import Route from "next/router";
import React from "react";
import SvgIcon from "../../components/Image/SvgIcon";
import * as config from "../../utils/Config";

const StickySidebar = () => {
    const handleClick = (path: string) => {
        Route.push(`/${path}`)
    }
    return (
        <React.Fragment>
            <div className="homepage_fixed_sidebar py-3">
                <div className="top_items">
                    <div onClick={()=>handleClick("streams")} className="item">
                        <SvgIcon src={config.LIVE_TV_ICON} height="40px" width="40px" color="#000" id="live-tv" />
                        <label htmlFor="live-tv">Live TV</label>
                    </div>
                    <br />

                    <div onClick={()=>handleClick("")} className="item">
                        <SvgIcon src={config.EXPLORE_ICON} height="26px" width="26px" color="#000" id="explore" />
                        <label htmlFor="explore">Explore</label>
                    </div>
                    <br />

                    <div onClick={()=>handleClick("categories")} className="item">
                        <SvgIcon src={config.GRID_ICON} height="26px" width="26px" color="#000" id="categories" />
                        <label htmlFor="categories">Categories</label>
                    </div>
                    <br />

                    <div onClick={()=>handleClick("models")} className="item">
                        <SvgIcon src={config.USER_ICON} height="26px" width="26px" color="#000" id="models" />
                        <label htmlFor="models">Models</label>
                    </div>
                    <br />

                    <div onClick={()=>handleClick("photos")} className="item">
                        <SvgIcon src={config.IMAGE_ICON} height="26px" width="26px" color="#000" id="photos" />
                        <label htmlFor="photos">Photos</label>
                    </div>
                    <br />

                    <div onClick={()=>handleClick("videos")} className="item">
                        <SvgIcon src={config.VIDEO_ICON} height="26px" width="26px" color="#000" id="videos" />
                        <label htmlFor="videos">Videos</label>
                    </div>
                    <br />

                </div>
                <div className="bottom_items">
                    <div onClick={()=>handleClick("live")} className="item">
                        <SvgIcon src={config.VIDEOCAM_ICON} height="26px" width="26px" color="#000" id="go-live" />
                        <label htmlFor="go-live">Go Live</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StickySidebar;
