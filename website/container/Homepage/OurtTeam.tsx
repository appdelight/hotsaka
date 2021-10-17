import { IconButton } from "@mui/material";
import React from "react";
import Img from "../../components/Img";
import Link from "next/link";

const OurtTeam = () => {
    return (
        <React.Fragment>
            <div className="out_team">
                <div className="col-12 row text-dark m-0 p-0">
                    <div className="col-lg-5 p-5 bg-white">
                        <span className="fancy__title">Our Team</span>
                        <h1>Meet our very </h1>
                        <h1>best: the most recognized</h1>
                        <h1>chefs</h1>
                        <p>
                            How did it all begin? With "Mamma", of course: the mother of all Giardino was opened in 1999 in Nuremberg. Since then, our
                            recipe has proved to be a success: fresh Italian cuisine and a casual ambience.
                        </p>
                        <Link href="/staffs">View All Team</Link>
                    </div>
                    <div className="col-lg-7 p-5 team_details">
                        <div className="p-3 homepage__staff">
                            <div className="team_profile px-4">
                                <Img className="object-fit-cover" src="/images/lady_cook.jpg" height="200px" width="200px" />
                            </div>
                            <div className="profile_details">
                                <h2>Antonio Azuro</h2>
                                <p>Co Founder, Chief</p>
                                <p>
                                    Chef and owner Antonio Azuro graduated as valedictorian of The Restaurant School of Italian Food Collage, Napoli,
                                    Italy
                                </p>
                                <div className="social_media_links">
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
                                </div>
                            </div>
                        </div>
                        <div className="p-3 homepage__staff">
                            <div className="team_profile px-4">
                                <Img className="object-fit-cover" src="/images/gens_cook.jpg" height="200px" width="200px" />
                            </div>
                            <div className="profile_details">
                                <h2>Antonio Azuro</h2>
                                <p>Co Founder, Chief</p>
                                {/* <br /> */}
                                <p>
                                    Chef and owner Antonio Azuro graduated as valedictorian of The Restaurant School of Italian Food Collage, Napoli,
                                    Italy
                                </p>
                                <div className="social_media_links">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OurtTeam;
