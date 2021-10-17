import moment from 'moment'
import React from 'react'
import Avatar from '../../components/Avatar'
import { ActivityData } from '../../redux/Actions/Activity.action'

const ActivityTypeComponent = (props: ActivityData):JSX.Element => {
    const activityBody = () => {
        switch(props.activityType){
            case "LIKE":
                return <span> has liked your post. </span>;
            case "COMMENT":
                return <span> has commented on your post </span>;
            case "FOLLOW":
                return <span> started following you. </span>
            case "TAG":
                return <span> has tagged you in a post. </span>;
            case "SUGESTION":
                return <span>{props.data.text}</span>
            default:
                return <span></span>
        }
    }
    return (
        <React.Fragment>
            <div className="activity_tile d-flex px-2">
                <div className="activity_profile p-2">
                    <Avatar
                        profilePic={props.profilePic}
                        width="50px"
                        height="50px"
                        name={props.username}
                        id={props.userId}
                        className="activity_avatar"
                    />
                </div>
                <div className="activity_text px-2 ">
                    <b className="">{ props.username }</b> 
                    {activityBody()}
                    <span className="text-muted mx-2">
                        {moment(+props.timestamp).fromNow(false)}
                    </span>
                </div>
                {
                    props.data.url ? (
                        <div className="liked_post_preview">
                            <Avatar
                                profilePic={props.data.url}
                                width="50px"
                                height="50px"
                                name={props.username}
                                id={props.userId}
                                className="liked_post_avatar"
                            />
                        </div>
                    ): <></>
                }
            </div>
        </React.Fragment>
    )
}

export default ActivityTypeComponent
