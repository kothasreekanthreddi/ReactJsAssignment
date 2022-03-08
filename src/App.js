import React from "react";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PostDetails from "./components/AlbumDetails/PostDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='post/:id' element={<PostDetails/>} />        
        <Route  path='*' element={<PageNotFound/>} />             
        </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
