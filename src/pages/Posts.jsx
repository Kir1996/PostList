import React, { useEffect, useState} from "react";
import '../styles/App.css';
//import PostItem from "./components/PostItem";
import PostList from "../components/PostList";
//import MyButton from "./components/UI/button/MyButton";
//import MyInput from "./components/UI/input/MyInput";
import PostForm from "../components/PostForm";
//import MySelect from "./components/UI/select/MySelect";
//import MyInput from "./components/UI/input/MyInput";
import PostFilter from "../components/PostFilte";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
//import axios from "axios";
import PostService from "../API/PostServise";
import { useNavigate } from 'react-router-dom';

function Posts() {
  const navigate = useNavigate(); 
  const handleClick = () => navigate('/');
  const [posts, setPosts] = useState([])
  const [filter, setFilter]=useState({sort:'', query: ''})
  const [modal, setModal]= useState(false);
  const sortedAndSerchedPost = usePosts(posts,filter.sort,filter.query);

  useEffect(()=>{
    fetchPosts()
  },[])

  const createPost= (newPost) => {
    setPosts([...posts,newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const posts= await PostService.getAll();
    setPosts(posts)
  }

 const removePost =(post) => {
  setPosts(posts.filter(p=> p.id !== post.id))
 
 }


  return (
    <div>
        <div>
      <MyButton style={{marginTop:30}} onClick={()=>setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyButton type="button" onClick={handleClick}> 
                Информация о проекте 
        </MyButton> 
      </div>
      <MyModal visible={modal} setVisible={setModal}>
       <PostForm create={createPost}/>
      </MyModal>
    <hr style={{margin:'15px  0'}}/>   
    <PostFilter 
    filter={filter} 
    setFilter={setFilter}
    />
       <PostList 
       remove={removePost} 
       posts={sortedAndSerchedPost} 
       title="Список постов"
       />
    </div>
  );
}

export default Posts;