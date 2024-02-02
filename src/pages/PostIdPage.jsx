import React, { useEffect,  useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostServise";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";



const PostIdPage =() => {
  const navigate = useNavigate(); 
  const handleClick = () => navigate('/posts');
  const params=useParams()
  const [post, setPost]=useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingCom, setIsLoadingCom] = useState(false);
  const [errorCom, setErrorCom] = useState(null);
  const [comments, setComments]=useState([])
  const fetchPostById = useCallback(async (id) => {
    setIsLoading(true);
    setError(null);
    try {
        const postData = await PostService.getByID(id);
        setPost(postData);
    } catch (e) {
        setError(e.message);
    } finally {
        setIsLoading(false);
    }
}, []);
const fetchCommentsPostById = useCallback(async (id) => {
  setIsLoadingCom(true);
  setErrorCom(null);
  try {
      const postData = await PostService.getCommentsByID(id);
      setComments(postData);
  } catch (e) {
    setErrorCom(e.message);
  } finally {
      setIsLoadingCom(false);
  }
}, []);
useEffect(() => {
  if (params.id) {
      fetchPostById(params.id);
      fetchCommentsPostById(params.id);
  }
}, [params.id, fetchPostById, fetchCommentsPostById]);

if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}
if (isLoadingCom) {
  return <div>Loading...</div>;
}

if (errorCom) {
  return <div>Error: {error}</div>;
}

  return(
    <div>
            <div className="pageHeader">
            <h1>Описание</h1>
            <MyButton type="button" onClick={handleClick}> 
                Назад
        </MyButton> 
        </div>
            {post && (
                <div>
              {post.id}. {post.title}
          </div>
)}
        <h5>Комментарии</h5>
        <div >{comments.map(comm=>
          <div key={comm.id}>
            <h5 >{comm.email}</h5>
            <div >{comm.body}</div>
          </div>
          )}
          </div>
        </div>
    )
}
export default PostIdPage;
/*
//const postId = params.id
const [post, setPost] = useState({});
console.log(params.name)
  const [users, setUsers] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
      ).then((response) => response.json());

    setUsers(response);
  };
  
  const Component = () => {
    const { userId } = useParams();
    
    React.useEffect(() => {
      axios.get(`/api/users/${userId}`)
      .then(({ data: user }) => {
        console.log('user', user);
        setState({ user });
      });
    }, []);
  }*/
 /* class Mem {
  static async getByID(id){
      const response= await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      return response.data
  }}
  const params = useParams();
  const[post, setPost]=useState({})
  const [feth, load]=useFetching(async()=>{
    const response=await Mem.getByID(params.id)
    setPost(response)
  })
  useEffect(()=>{
    feth(params.id)
  },[])*/