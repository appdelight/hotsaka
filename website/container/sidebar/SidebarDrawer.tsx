import { IconButton } from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { close_drawer } from "../../utils/Global";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from '@mui/icons-material/Info';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ContactsIcon from '@mui/icons-material/Contacts';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Sidebar = () => {
    const handleClick = (route: string) => {
        Router.push(route);
        close_drawer("OPEN_DRAWER");
    };
    return (
        <React.Fragment>
            <div className="py-3">
                <div className="d-flex justify-content-between container" onClick={()=>close_drawer("OPEN_DRAWER")}>
                    <h2 className="sidebar__text_logo">𝔖𝔭𝔦𝔠𝔶𝔇𝔢𝔩𝔦</h2>
                    <CloseOutlinedIcon className="" fontSize="large" />
                </div>
                <div onClick={() => handleClick("/")} className="sidebar__item container">
                    <div className="mr-2"><HomeIcon /></div>
                    <Link href="/">Home</Link>
                </div>
                <hr className="m-0" />
                <div onClick={() => handleClick("/menu")} className="sidebar__item container">
                    <div className="mr-2"><MenuBookIcon /></div>
                    <Link href="/menu">Menu</Link>
                </div>
                <hr className="m-0" />
                <div onClick={() => handleClick("/staffs")} className="sidebar__item container">
                    <div className="mr-2"><RestaurantMenuIcon /></div>
                    <Link href="/staffs">Staffs</Link>
                </div>
                <hr className="m-0" />
                <div onClick={() => handleClick("/about")} className="sidebar__item container">
                    <div className="mr-2"><InfoIcon /></div>
                    <Link href="/about">About</Link>
                </div>
                <hr className="m-0" />
                <div onClick={() => handleClick("/contacts")} className="sidebar__item container">
                    <div className="mr-2"><ContactsIcon /></div>
                    <Link href="/contacts">Contacts</Link>
                </div>
                <hr className="m-0" />
                <div onClick={() => handleClick("/faqs")} className="sidebar__item container">
                    <div className="mr-2"><LiveHelpIcon /></div>
                    <Link href="/faqs">FAQs</Link>
                </div>
            </div>
                <div className="sidebar_social_media_icons">
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
                    <span className="px-2">
                        <IconButton className="icon_bg">
                            <img className="social_icon" src="/app-icons/pinterest.png" height="14px" width="14px" />
                        </IconButton>
                    </span>
                </div>
            <style>{`
                .container{
                    width: 100%;
                }
                .paper_drawer{
                    max-width: 300px;
                }
                .sidebar__item{
                    height: 52px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    // border-bottom: 01px solid lightgrey;
                }
                .sidebar__item a{
                    color: #000000;
                }
                .sidebar_social_media_icons{
                    position: absolute;
                    bottom: 9px;
                    width: 100%;
                    text-align: center;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Sidebar;
