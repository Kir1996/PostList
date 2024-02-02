import React from "react";
import { useNavigate } from 'react-router-dom';
import MyButton from "../components/UI/button/MyButton";
const About=() => {
    const navigate = useNavigate(); 
    const handleClick = () => navigate('/posts'); 
    return(
        <div className="headerAbout">
    <h1>
        Посты и работа с ними!
    </h1>
    <h3>В этом проекте реализована возможность просмотра и обработка постов.</h3>
    <h4>Функционал который был реализован:</h4>
    <ul className="listAbout">
        <li>Список постов используется с Api jsonplaceholder.</li>
        <li>Посты сортируются по названию и описанию.</li>
        <li>Реализован поиск.</li>
        <li>Есть возможность добавления нового поста.</li>
        <li>Посты можно удалять.</li>
        <li>При нажатии на кнопку "Открыть" можно посмотреть информацию о каждом посте где будет дано название, email, комментарии.</li>
    </ul>
    
     <MyButton type="button" onClick={handleClick}> 
     Просмотреть
 </MyButton> 
 </div>
    );
};

export default About;