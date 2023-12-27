import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const images = imageData().map(item => <img key={item.id} src={item.img} className="style" alt="Image" />);
  return (
    <div>
      <h1 class="heading">Kalvium gallary</h1>
      {images}
    </div>
  );
}

export default App;