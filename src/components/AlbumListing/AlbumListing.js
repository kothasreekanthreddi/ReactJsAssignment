import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllAlbums,getAllComments } from '../../features/albums/albumSlice';
import AlbumCard from "../AlbumCard/AlbumCard";    
import "./AlbumListing.scss";


const AlbumListing = () => {
    const albums = useSelector(getAllAlbums);
    const comments = useSelector(getAllComments);    
    const [currentPage, setcurrentPage] = useState(1);
    const [currentAlbums, setcurrentAlbums] = useState([]);
    const [currentAlbumItems, setcurrentAlbumItems] = useState([]);
    const albumsPerPage = 10;
    	      // Logic for displaying todos
              const indexOfLastAlbum = currentPage * albumsPerPage;
              const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
              const temArray = albums;
              useEffect(() => {
                  if(albums.length > 0) {
                    setcurrentAlbumItems(temArray.slice(indexOfFirstAlbum, indexOfLastAlbum)); 
                  }  else{
                    
                  }             
            }, [albums.length,currentPage])
              
    let renderAlbums,renderComments = "";
    console.log("working fine",albums);   
    renderAlbums =
    currentAlbumItems.length > 0 ? (
            
      currentAlbumItems.map((album,index) => (
                <AlbumCard key={index} data={album} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{albums.Error}</h3>
            </div>
        );
        	// Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(albums.length / albumsPerPage); i++) {
      pageNumbers.push(i);
    }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={() => setcurrentPage(number)}
              >
                {number}
              </li>
            );
            });
            

    return (
    <div className="movie-wrapper">
        <div className="movie-list">
            <h2>Albums</h2>
            <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
            <div className="movie-container">{renderAlbums}</div>
        </div>
  
    </div> 
    
    );
};

export default AlbumListing; 