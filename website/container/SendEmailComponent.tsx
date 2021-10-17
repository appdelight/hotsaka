import { Box, Grid, TextField } from "@mui/material";
import React from "react";

const SendEmailComponent = () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center ">
                <div className="send_email_card bg-dark p-5 m-5 w-70 ">
                    <div className="d-flex justify-content-center">
                        <p className="fancy__title h-fit-content address__title">Contact form</p>
                        <span className="line__2 h-fit-content"></span>
                    </div>
                    <h1 className="text-white text-center my-4 drop_a_line">Drop a line</h1>
                    <br />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    fullWidth
                                    style={{ background: "#fff" }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="name"
                                    fullWidth
                                    style={{ background: "#fff" }}
                                    label="Name"
                                    variant="outlined"
                                />
                            </Grid>
                            <br />
                            <Grid item md={12}>
                                <TextField
                                    id="message"
                                    // label="Name"
                                    multiline
                                    fullWidth
                                    style={{ background: "#fff" }}
                                    minRows={14}
                                    placeholder="Your Message..."
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <div className="my-3">
                            <input type="checkbox" name="" id="agree" />
                            <label className="primary_text" htmlFor="agree">
                                I agree that my submitted data is being collected and stored.
                            </label>
                        </div>

                        <div className="send__message">
                            <button className="btn btn-link primary_text">
                                <h3 className="primary_text">Subscribe</h3>
                            </button>
                        </div>
                    </Box>
                </div>
            </div>
            <style>{`
                .send_email_card .address__title::after {
                    position: absolute;
                    content: "";
                    bottom: -11px;
                    left: 26%;
                    width: 87px;
                    height: 2px;
                    background-color: var(--primary_text);
                }
                
                .send_email_card .line__2::after {
                    position: absolute;
                    content: "";
                    bottom: -70px;
                    left: -107px;
                    width: 48px;
                    height: 2px;
                    background-color: var(--primary_text);
                }
                
                label.primary_text{
                  padding-left: 10px;
                }
                .send__message{
                  display: flex;
                  justify-content: flex-end;
                }
                .drop_a_line{
                  font-size: 5vw;
                }
            `}</style>
        </React.Fragment>
    );
};

export default SendEmailComponent;
