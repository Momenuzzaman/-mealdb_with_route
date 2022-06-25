import { useNavigate } from 'react-router-dom';
import './Detail.css';
const Detail = (props) => {

    const {strArea,strMeal,strMealThumb,strInstructions} = props.meal;
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className='mealDetail'>
            <img className='img' src={strMealThumb} alt=''></img>
            <h1>{strArea}</h1>
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,500)}</p>
            <button onClick={handleBack} className="button">see all Food</button>
        </div>
    );
};

export default Detail;