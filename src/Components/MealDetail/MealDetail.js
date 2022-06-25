import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../detail/Detail";
import './MealDetai.css';



const MealDetail = () => {
    const {mealId} = useParams()
    const [mealDetail,setDetail] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => setDetail(data.meals))
    },[]);
    return (
        <div className="mealDetail">
            {
            mealDetail.map(meal => <Detail meal = {meal}></Detail>)
            }
        </div>
    );
};

export default MealDetail;