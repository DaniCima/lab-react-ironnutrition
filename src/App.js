import logo from './logo.svg';
import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from '../src/components/FoodBox';
import AddFoodForm from '../src/components/AddFoodForm';
import Search from '../src/components/Search';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [foodsState, setFoodsState] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm setFoodsState={setFoodsState} foodsState={foodsState} />

      <Button> Hide Form / Add New Food </Button>

      {/* <Search /> */}

      <Divider>Food List</Divider>
      {foodsState.map((food) => {
        return (
          <Row
            key={uuidv4()}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <FoodBox food={food} />
          </Row>
        );
      })}
    </div>
  );
}

export default App;
