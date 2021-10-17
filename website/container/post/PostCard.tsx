import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import { PostObject } from "../../redux/Actions/Post.action";
import { useSelector } from "react-redux";
import { StateTypes } from "../../redux/Reducers";
import Avatar from "../../components/Avatar";
import { ConfigState } from "../../redux/Actions/Config.action";

const PostCard = (props: PostObject): JSX.Element => {
    const configState: ConfigState = useSelector(
        (state: StateTypes) => state.config
    );
    const [likedPost, setLikedPost] = useState<string[]>([]);

    const handleLikeDislike = (id: string) => {
        if (likedPost.includes(id)) {
            const likedPostIns = [...likedPost];
            const index = likedPostIns.indexOf(id);
            likedPostIns.splice(index, 1);
            return setLikedPost(likedPostIns);
        } else {
            return setLikedPost([...likedPost, id]);
        }
    };

    const handleDoubleClick = (id: string) => {
        handleLikeDislike(id)
    }

    return (
        <>
            <div onDoubleClick={()=>handleDoubleClick(props.id)} className="post_card">
                
                <div className="post_card_header d-flex justify-content-between px-2 py-3">
                    <div className="left d-flex align-items-center">
                        <Avatar
                            width={"50px"}
                            height={"50px"}
                            className="rounded-circle"
                            {...props.user}
                        />
                        <span className="px-2">{props.user.username}</span>
                        <span className="dot"></span>
                        <span className="post_user_follow px-2"> Follow</span>
                    </div>
                    <div className="right d-flex align-items-center">
                        <span className="material-icons-outlined px-2">
                            more_vert
                        </span>
                    </div>
                </div>
                <Image
                    layout="responsive"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                    alt={props.alt}
                    className="image_grid"
                    id={props.id}
                    src={
                        configState.isMobile
                            ? props.urls.small || props.urls.small
                            : props.urls.full || props.urls.regular
                    }
                />
                <div className="post_card_footer d-flex justify-content-between px-2 py-3">
                    <div className="left d-flex align-items-center">
                        <span
                            onClick={() => handleLikeDislike(props.id)}
                            className={`material-icons-outlined px-2 ${likedPost.includes(props.id) ? "liked" : ""}`}
                        >
                            {likedPost.includes(props.id) ? "favorite" : "favorite_border"}
                        </span>
                        <span className="material-icons-outlined px-2">
                            mode_comment
                        </span>
                        <span className="material-icons-outlined px-2">
                            ios_share
                        </span>
                    </div>
                    <div className="right d-flex align-items-center">
                        <span className="material-icons-outlined px-2">
                            bookmark_border
                        </span>
                    </div>
                </div>
                <hr className="m-0" />
            </div>
        </>
    );
};

export default PostCard;
