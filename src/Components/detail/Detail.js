import './Detail.css';
const Detail = (props) => {
    const {strArea,strMeal,strMealThumb,strInstructions} = props.meal;
    return (
        <div className='meal'>
            <img className='img' src={strMealThumb} alt=''></img>
            <h1>{strArea}</h1>
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,500)}</p>
            <button className="button">see all Food</button>
        </div>
    );
};

export default Detail;