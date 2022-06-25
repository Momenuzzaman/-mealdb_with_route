import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './App.css';
import MealDetail from './Components/MealDetail/MealDetail';
import Restaurant from './Components/Restaurant/Restaurant';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Restaurant/>}></Route>
        <Route path="/meal/:mealId" element={<MealDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
