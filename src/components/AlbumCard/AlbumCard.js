import React from 'react';
import { Link } from "react-router-dom";
import "./AlbumCard.scss";

const AlbumCard = (props) => {    
        const { data }  = props;
        return (
                <div className="card-item">
                       <Link to={'/post/'+data.id}>
                                <div className="card-inner">
                                        <div className="card-top">
                                                <h3>Post ID : {data.id}</h3>
                                                <h3>Post Title : {data.title}</h3>
                                        </div>
                                        <div className="card-bottom">
                                                <div className="card-info">
                                                <h3>Post Description :</h3>
                                                        
                                                        <p> {data.body}</p>
                                                </div>
                                        </div>
                                </div>
                        </Link>
                </div>
        )     
    
};

export default AlbumCard;