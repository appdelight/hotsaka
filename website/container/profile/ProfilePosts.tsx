import React from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '../../redux/Reducers';
import { PostObject } from '../../redux/Actions/Post.action';
import { getProfilePostList } from '../../redux/Actions/Profile.action';

const ProfilePosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state: StateTypes) => state.posts);

    React.useEffect(() => {
        if(!posts || !posts.length){
            dispatch(getProfilePostList({ page:1 }));
        }
    }, []);
    return (
        <React.Fragment>
            <div className="d-flex flex-wrap">
                {posts.map((post:PostObject, index: number)=>(
                    <div key={index} className="grid_post">
                        <Image
                            src={post.urls.thumb}
                            alt={post.alt}
                            id={post.id}
                            layout="responsive"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            />
                    </div>
                ))}
            </div>
            <style>{`
                .grid_post{
                    height: 33.33vw;
                    width: 33.33vw;
                    background: #212529;
                }
            `}</style>
        </React.Fragment>
    )
}

export default ProfilePosts
