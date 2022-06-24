import { useState } from "react";

const Restaurant = () => {
    const [conText,setConText] = useState('');

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        console.log(searchValue);
    }

    return (
        <div>
            <input onChange={handleSearch} type="text" placeholder="Search Food"></input>
        </div>
    );
};

export default Restaurant;