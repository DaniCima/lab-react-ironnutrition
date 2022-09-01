import { Divider, Input } from 'antd';
import foodDataJSON from '../foods.json';
import { useState } from 'react';

// Iteration 5
function Search({ foodsState, setFoodsState }) {
  const [foodData] = useState(foodDataJSON);
  const [targetFood, setTargetFood] = useState(foodDataJSON);

  const filterFoodList = (str) => {
    setTargetFood(str);
    const foodListCopy = [...foodsState];
    let filteredFoods;
    if (str === 'All') {
      filteredFoods = foodListCopy;
    } else {
      filteredFoods = foodListCopy.filter((food) => {
        return food.name[0].toLowerCase() === str.toLowerCase();
      });
    }

    setFoodsState(filteredFoods);
  };

  const handleSelect = (e) => {
    filterFoodList(e.target.value);

    //   // console.log("selected", e.target.value);
    //   props.filterMovies(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={targetFood} type="text" onChange={handleSelect} />
    </>
  );
}

export default Search;

// import { Divider, Input } from 'antd';
// import { useState } from 'react';

// // Iteration 5
// function Search(props) {
//   const [firstLetter, setFirstLetter] = useState('All');

//   const handleSelect = (e) => {
//     setFirstLetter(e.target.value);
//   };
//   return (
//     <>
//       <Divider>Search</Divider>

//       <label>Search</label>
//       <Input value={firstLetter} type="text" onChange={handleSelect} />
//     </>
//   );
// }

// export default Search;
