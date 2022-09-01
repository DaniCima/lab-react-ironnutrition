import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ food, foodsState, setFoodsState }) {
  console.log(food);
  const deleteFood = () => {
    const copyFoods = [...foodsState];
    const OneLessFood = copyFoods.filter((item) => {
      return item.name !== food.name;
    });
    setFoodsState(OneLessFood);
  };
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={deleteFood}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
