import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import './Meal.css';

function GridExample(props) {
    const {strArea,strMeal,strMealThumb,idMeal} = props.meal;
    console.log(props); 

    const navigate = useNavigate()
    const url = `/meal/${idMeal}`;
    const handleMealDetail = () =>{
        navigate(url);
    }

    return (
        <Row xs={1} md={2} className="g-4 meal">
            <Col>
            <Card>
                <Card.Img variant="top" src= {strMealThumb} />
                <Card.Body>
                <Card.Title>{strArea}</Card.Title>
                <Card.Text>
                    {strMeal}
                </Card.Text>
                </Card.Body>
                <button className="button" onClick={handleMealDetail}>detail</button>
            </Card>
            </Col>
        </Row>
    );
}

export default GridExample;