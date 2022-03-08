import React, { useEffect } from 'react';
import "./PostDetails.scss";
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchAsynPostDetails,getSinglePostComments,getSinglePost,fetchAsynPostComments} from '../../features/albums/albumSlice';

const PostDetails = () => {
    const { id } = useParams();
    const dispatch  = useDispatch();
    const postdetails = useSelector(getSinglePost);
    const postcomments = useSelector(getSinglePostComments);
    useEffect(() => {
        dispatch(fetchAsynPostDetails(id));
        dispatch(fetchAsynPostComments(id));
        console.log(postdetails);
        console.log(postcomments);
       /* return () => {
            dispatch(removeSelectedMovieOrShow(imdbID));
        };*/
    },[])
    const listItems = postcomments.map((d) => <li key={d.postId}><div>Email:{d.email} </div><div> Comment:{d.body}</div></li>);
    
        
    return (
        <div>
    <div className="movie-section">
        
        <div className="section-left">
            <h2>Post Details</h2><br></br><br></br>
            <div className="movie-title">{postdetails.title}</div>
            <div className="movie-rating">
                <span>
                    User ID <i className="fa fa-star"></i>: {postdetails.userId}
                </span>
                <span>
                    Post Id<i className="fa fa-thumbs-up"></i>: {postdetails.id}
                </span>
                <span>
                    Post Title<i className="fa fa-film"></i>: {postdetails.title}
                </span>
                <span>
                   Post Body <i className="fa fa-calendar"></i>: {postdetails.body}
                </span>   

            </div>
            </div>  
           
           
            
        
    </div>
    <div className="movie-section">
        <h2> Comments</h2>
        <ul className="liststyle">{listItems}</ul>
    </div>

    </div>
    );
    
};

export default PostDetails;