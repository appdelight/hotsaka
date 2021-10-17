import { Box, Grid } from "@mui/material";
import React from "react";
import CustomHead from "../components/head";
import Footer from "../container/Footer";
import Header from "../container/Header";
import MapLocation from "../container/Homepage/MapLocation";
import SendEmailComponent from "../container/SendEmailComponent";
import { MenuTypes } from "../utils/types";
import * as Config from '../utils/Config';

const Contacts = () => {
    return (
        <React.Fragment>
            <CustomHead
                title={`Contacts | ${Config.APP_NAME}`}
            ></CustomHead>
            <div className="contacts__page">
                <Header activeTab={MenuTypes.CONTACTS}></Header>
                <div className="contacts__container mh-100vh  bg-white text-dark">
                    <div className="contacts_page_header d-flex justify-content-center align-items-center vh-20">
                        <h1>Contacts</h1>
                    </div>
                    <div className="contacts__welcome__cont py-5 my-5">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid className="text-center" item md={3}>
                                    <h3 className="address__title">Address</h3>
                                    <span className="line__2"></span>
                                    <p className="primary_text description">
                                        8500, Lorem Street, Chicago, <br />
                                        IL, 55030
                                    </p>
                                </Grid>
                                <Grid className="text-center" item md={3}>
                                    <h3 className="address__title">Phone</h3>
                                    <span className="line__2"></span>
                                    <p className="primary_text description">
                                        <h5>Online Reservations</h5>
                                        <a href="tel:+919814487788">+91 9814487788</a>
                                        <br />
                                        <a href="tel:+917831064056">+91 7831064056</a>
                                    </p>
                                </Grid>

                                <Grid className="text-center" item md={3}>
                                    <h3 className="address__title">Working Hour</h3>
                                    <span className="line__2"></span>
                                    <p className="primary_text description">
                                        <p className="m-0">Lunch 11:30am – 2:30pm</p>
                                        <p className="m-0">Dinner 5:30am – 10pm</p>
                                        <p className="m-0">Sun. Brunch 10:30am – 2:30pm</p>
                                        <p className="m-0">Sun. Dinner 5:30pm – 10pm</p>
                                        <p className="m-0">Happy Hour</p>
                                        <p className="m-0">Mon-Fri 5pm – 7pm</p>
                                    </p>
                                </Grid>
                                <Grid className="text-center" item md={3}>
                                    <h3 className="address__title">Email</h3>
                                    <span className="line__2"></span>
                                    <p className="primary_text description m-0">
                                        <a  rel="noreferrer" target="_blank" href="mailto:nshopit@gmail.com">
                                            nshopit@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        <a rel="noreferrer" target="_blank" href="mailto:kashinath.intern@gmail.com">
                                            kashinath.intern@gmail.com
                                        </a>
                                    </p>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    <MapLocation></MapLocation>
                    <SendEmailComponent></SendEmailComponent>
                </div>
                <Footer></Footer>
            </div>
            <style>{`
                .contacts_page_header {
                    background-color: #f1efe8;
                    color: var(--dark);
                }
                .contacts_page_header h1 {
                    font-size: 5vw;
                }

                .contacts__welcome__cont {
                    width: 100%;
                    display: flex;
                }

                .address__title,
                .line__2 {
                    position: relative;
                }
                .address__title::after {
                    position: absolute;
                    content: "";
                    bottom: -11px;
                    left: 30%;
                    width: 87px;
                    height: 2px;
                    background-color: var(--primary_text);
                }

                .line__2::after {
                    position: absolute;
                    content: "";
                    bottom: -9px;
                    left: -28px;
                    width: 48px;
                    height: 2px;
                    background-color: var(--primary_text);
                }
                .contacts__page .description {
                    padding-top: 20px;
                }

                .contacts__page a,
                .contacts__page a:active {
                    color: var(--primary_text);
                }
            `}</style>
        </React.Fragment>
    );
};

export default Contacts;
