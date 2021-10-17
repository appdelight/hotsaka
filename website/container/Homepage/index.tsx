import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationIndicator from "../../components/PaginationIndicator";
import { getPostList, PostObject } from "../../redux/Actions/Post.action";
import { StateTypes } from "../../redux/Reducers";
import Footer from "../Footer";
import PostCard from "../post/PostCard";
import StickySidebar from "../sidebar/StickySidebar";
import Story from "../Story";
import FoodGallery from "./FoodGallery";
import LandingComponent from "./LandingComponent";
import OurMenu from "./OurMenu";
import OurSpeciality from "./OurSpeciality";
import OurtTeam from "./OurtTeam";
import SubscribeComponent from "./SubscribeComponent";
import TestimonialComponent from "./TestimonialComponent";
import WelcomeComponent from "./WelcomeComponent";

const Homepage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: StateTypes) => state);

    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    React.useEffect(() => {
        if (!state.posts) {
            setLoading(true);
            dispatch(getPostList({ page, search }));
        }
    }, []);

    React.useEffect(() => {
        setLoading(false);
    }, [state.posts]);

    const handlePagination = async (event: number) => {
        setLoading(true);
        dispatch(getPostList({ page: event, search }));
        setPage(event);
    };
    return (
        <React.Fragment>
            <div id="homepage" className="homepage">
                
                <div className="left_sidebar">
                    <StickySidebar></StickySidebar>
                </div>
                <div className="body">
                    <div className="body_container">
                        main body
                    </div>
                    <div className="footer">
                        {/* <Footer></Footer> */}
                    </div>
                </div>
                <div className="right_sidebar">
                    right sidebar
                </div>
            </div>
            <style>{`
                .homepage{
                    display: flex;
                }
            
            `}</style>
        </React.Fragment>
    );
};

export default Homepage;
