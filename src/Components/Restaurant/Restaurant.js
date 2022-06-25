import { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import './Restaurant.css';

const Restaurant = () => {
    const [searchText,setSearchText] = useState('');
    const [meals,setMeals] = useState([]);
    
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(response => response.json())
        .then(data => setMeals(data.meals))
    },[searchText])

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchText(searchValue);
    }

    return (
        <div>
            <input className="search" onChange={handleSearch} type="text" placeholder="Search Food"></input>
        <div className= 'meal-container'>
            {
                meals.map(meal =><Meal meal={meal}></Meal>)
            }
        </div>
        </div>
    );
};

export default Restaurant;