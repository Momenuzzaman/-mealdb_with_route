import { useEffect, useState } from "react";

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
            <input onChange={handleSearch} type="text" placeholder="Search Food"></input>
            
        </div>
    );
};

export default Restaurant;