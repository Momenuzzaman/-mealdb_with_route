import { useParams } from "react-router-dom";



const MealDetail = () => {
    const {mealId} = useParams()
    return (
        <div>
            <h1>{mealId}</h1>
        </div>
    );
};

export default MealDetail;