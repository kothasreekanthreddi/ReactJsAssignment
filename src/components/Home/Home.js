import React, { useEffect } from 'react';
import AlbumListing from "../AlbumListing/AlbumListing";
import albumApi from "../../common/apis/albumApi";
import { APIKey} from "../../common/apis/AlbumApiKey";
import { useDispatch } from 'react-redux';
import {fetchAsyncAlbums ,fetchAsyncComments} from "../../features/albums/albumSlice"


const Home = () => {
    const dispatch  = useDispatch();    
    useEffect(() => {       
        dispatch(fetchAsyncAlbums());        
     },[]);
    return (
        <div>
            <div className="banner-img">             
            </div>
            <AlbumListing />
        </div>
        
    );
};

export default Home;