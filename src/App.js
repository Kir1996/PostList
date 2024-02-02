//import React, { useEffect, useState} from "react";
import './styles/App.css';
//import PostItem from "./components/PostItem";
//import PostList from "./components/PostList";
//import MyButton from "./components/UI/button/MyButton";
//import MyInput from "./components/UI/input/MyInput";
//import PostForm from "./components/PostForm";
//import MySelect from "./components/UI/select/MySelect";
//import MyInput from "./components/UI/input/MyInput";
//import PostFilter from "./components/PostFilte";
//import MyModal from "./components/UI/MyModal/MyModal";
//import MyButton from "./components/UI/button/MyButton";
//import { usePosts } from "./hooks/usePost";
//import axios from "axios";
//import PostService from "./API/PostServise";
import React from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostIdPage from './pages/PostIdPage';



function App() {
 return(
  <div className="App">
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<About/>}/>
    <Route exact path="/posts" element={<Posts/>}/>
    <Route exact path="/posts/:id" element={<PostIdPage/>}/>
  </Routes>
  </BrowserRouter>
  </div>
 )
}

export default App;

