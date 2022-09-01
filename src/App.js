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
  const [showForm, steShowForm] = useState(false);

  return (
    <div className="App">
      {showForm && (
        <AddFoodForm setFoodsState={setFoodsState} foodsState={foodsState} />
      )}

      <Button onClick={() => steShowForm(!showForm)}>
        {' '}
        {showForm ? 'Hide Form' : 'Add New Food'}{' '}
      </Button>

      <Search setFoodsState={setFoodsState} foodsState={foodsState} />

      <Divider>Food List</Divider>
      {foodsState.map((food) => {
        return (
          <Row
            key={uuidv4()}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <FoodBox
              food={food}
              setFoodsState={setFoodsState}
              foodsState={foodsState}
            />
          </Row>
        );
      })}
    </div>
  );
}

export default App;
