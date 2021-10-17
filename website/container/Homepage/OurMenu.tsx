import { IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import Img from "../../components/Img";
import Router from "next/router";

const MenuList = [
    {
        "title": "Special Burger",
        "description": "Friend chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/burger.jpg"
    }, 
    {
        "title": "Delicious Cake",
        "description": "Friend chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/cake.jpg"
    }, 
    {
        "title": "Tandoori Chicken",
        "description": "Fried chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/big_chicken.jpg"
    },
    {
        "title": "Chinees Food",
        "description": "Friend chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/noodles.jpg"
    }, 
    {
        "title": "Healthy Diet",
        "description": "Friend chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/egg_bread.jpg"
    }, 
    {
        "title": "Indian Thhali",
        "description": "Friend chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/thaali.jpg"
    },
    {
        "title": "Daal Fried",
        "description": "Friend chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/daal.jpg"
    }, 
    {
        "title": "Deite Pizza",
        "description": "Friend chicken with chilli sauces",
        "price": "299",
        "currency": "$",
        "displayImage": "/images/pizza.jpg"
    },
    
];

const OurMenu = () => {
    const [activeTab, setActiveTab] = React.useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <React.Fragment>
            <div className="part5 menu_container ">
                <div className="container py-5">
                    <h1 className="container text-center">Our Best Menu</h1>
                    <div className="header_cont d-flex justify-content-between">
                        <h3 className="exp__menu__text">Explore The Menu</h3>
                        <Tabs className="overflow-auto tab_item" onChange={handleChange} value={activeTab} aria-label="Tabs where selection follows focus">
                            <Tab disableRipple label="Starters" />
                            <Tab disableRipple label="Main Course" />
                            <Tab disableRipple label="Breakfast" />
                            <Tab disableRipple label="Lunch" />
                            <Tab disableRipple label="Dinner" />
                            <Tab disableRipple label="Desert" />
                            <Tab disableRipple label="Drinks" />
                            <Tab disableRipple label="Fast Foods" />
                        </Tabs>
                    </div>
                    <div className="menu_categories d-flex w-100 m-0 flex-wrap">
                        {[...MenuList].map((menu, index) => (
                            <div key={index} className="grid_image position-relative">
                                <Img 
                                    className="menu_thumb object-fit-cover" 
                                    src={menu.displayImage}
                                    height="100%" 
                                    alt={`${menu.title} - ${menu.description}`}
                                    width="100%" />
                                <div className="menu_thumb_overflow position-relative w-100 h-100 p-2">
                                    <h5 className="text-white bold title">
                                        {menu.title}
                                    </h5>
                                    <div>
                                        <span className="mark__price mr-2">
                                            {menu.currency}{+menu.price + 11}
                                        </span>
                                        <span className="cost__price bold">
                                            {menu.currency}{menu.price}
                                        </span>
                                        <br />
                                    </div>
                                    <br />
                                    <br />
                                    <div className="">
                                        <IconButton onClick={() => Router.push("/chicken_tandoori")} className="menu_view_btn">
                                            View
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button
                            onClick={()=>Router.push('/menu')}
                            className="btn btn-dark">
                            veiw all
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OurMenu;
