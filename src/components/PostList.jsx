import PostItem from "./PostItem"

const PostList =({posts, title, remove}) =>{
    if(!posts.length){
        return (
            <div className="headihg">Посты не найдены</div>
        )
    }
    return(
        <div>
               <h1 className="headihg">{title}</h1>
     {posts.map((post, index)=>
      <PostItem remove={remove} numder={index + 1} post={post} key={post.id}/>
      )}
        </div>
    )
}
export default PostList