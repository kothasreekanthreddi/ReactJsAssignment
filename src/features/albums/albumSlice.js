import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import albumApi from "../../common/apis/albumApi";


export const fetchAsyncAlbums = createAsyncThunk('albums/fetchAsyncAlbums',async () => {    
    const response = await albumApi
    .get("/posts")
    .catch((err) => {
        console.log("Err :", err);
    });
    console.log("The Response of API is ",response);
    return response.data;
});

export const fetchAsyncComments = createAsyncThunk('albums/fetchAsyncComments',async () => {
    const response = await albumApi
    .get("/comments")
    .catch((err) => {
        console.log("Err :", err);
    });
    console.log("The Response of API is ",response);
    return response.data;
});

export const fetchAsynPostDetails = createAsyncThunk('albums/fetchAsyncPostDetails', async (id) => {
    const response = await albumApi
    .get("/posts/"+id)
    .catch((err) => {
        console.log("Err :", err);
    });
    console.log("The Response of API is", response);
    return response.data;
});

export const fetchAsynPostComments = createAsyncThunk('albums/fetchAsyncPostComments', async (id) => {
    const response = await albumApi
    .get("/comments/?postId="+id)
    .catch((err) => {
        console.log("Err :", err);
    });
    console.log("The Response of API is", response);
    return response.data;
});




const initialState = {
    albums : {},
    comments : {},
    post:{},
    postcomments:{}    
};

const albumSlice = createSlice({
    name:"albums",
    initialState,
    reducers:{

    },
    extraReducers:{
        [fetchAsyncAlbums.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncAlbums.fulfilled]: (state,{ payload }) => {
            console.log("Fetched Successfully");
            return { ...state, albums:payload };
        },
        [fetchAsyncAlbums.rejected]: () => {
            console.log("Rejected");           
        },
        [fetchAsyncComments.fulfilled]: (state,{ payload }) => {
            console.log("Fetched Successfully");
            return { ...state, comments:payload };
        },
        [fetchAsynPostDetails.fulfilled]: (state,{ payload }) => {
            console.log("Fetched Successfully");
            return { ...state, post:payload };
        },
        [fetchAsynPostComments.fulfilled]: (state,{ payload }) => {
            console.log("Fetched Successfully");
            return { ...state, postcomments:payload };
        },

    }
});



export const getAllAlbums = (state) => state.albums.albums;
export const getAllComments = (state) => state.albums.comments;
export const getSinglePost = (state) => state.albums.post;
export const getSinglePostComments = (state) => state.albums.postcomments;

export default albumSlice.reducer;