import React, { useState } from 'react';
import Waffle from './backend/Interfaces/Waffle';
import StrawberrySauce from './backend/Decorators/Sauces/StrawberrySauce';
import Nutella from './backend/Decorators/Chocolates/Nutella';
import BelgianWaffle from './backend/Waffles/BelgianWaffle';
import Strawberry from './backend/Decorators/Toppings/Strawberry';
import NormalWaffle from './backend/Waffles/NormalWaffle';
import RaspberrySauce from './backend/Decorators/Sauces/RaspberrySauce';
import CaramelSauce from './backend/Decorators/Sauces/CaramelSauce';
import ChocolateSauce from './backend/Decorators/Sauces/ChocolateSauce';
import DarkChocolate from './backend/Decorators/Chocolates/DarkChocolate';
import Caramel from './backend/Decorators/Chocolates/Caramel';
import MilkChocolate from './backend/Decorators/Chocolates/MilkChocolate';
import Apple from './backend/Decorators/Toppings/Apple';
import Banana from './backend/Decorators/Toppings/Banana';
import Blueberry from './backend/Decorators/Toppings/Blueberry';
import BubbleWaffle from './backend/Waffles/BubbleWaffle';
import GlutenFreeWaffle from './backend/Waffles/GlutenFreeWaffle';

const waffleTypes: {[key: string]: () => Waffle} = {
  'normal-waffle': () => new NormalWaffle(),
  'gluten-free-waffle': () => new GlutenFreeWaffle(),
  'bubble-waffle': () => new BubbleWaffle(),
  'belgian-waffle': () => new BelgianWaffle()
};

const chocolates: {[key: string]: (waffle: Waffle) => Waffle} = {
  'nutella': (waffle) => new Nutella(waffle),
  'caramel': (waffle) => new Caramel(waffle),
  'dark-chocolate': (waffle) => new DarkChocolate(waffle),
  'milk-chocolate': (waffle) => new MilkChocolate(waffle)
};

const sauces: {[key: string]: (waffle: Waffle) => Waffle} = {
  'strawberry-sauce': (waffle) => new StrawberrySauce(waffle),
  'caramel-sauce': (waffle) => new CaramelSauce(waffle),
  'raspberry-sauce': (waffle) => new RaspberrySauce(waffle),
  'chocolate-sauce': (waffle) => new ChocolateSauce(waffle)
};

const toppings: {[key: string]: (waffle: Waffle) => Waffle} = {
  'strawberry': (waffle) => new Strawberry(waffle),
  'apple': (waffle) => new Apple(waffle),
  'banana': (waffle) => new Banana(waffle),
  'blueberry': (waffle) => new Blueberry(waffle)
};

const App: React.FC = () => {
  const [selectedWaffle, setSelectedWaffle] = useState<Waffle | null>(null);

  const handleButtonClick = () => {
    const waffleType = (document.getElementById('waffleType') as HTMLSelectElement).value;
    const chocolate = (document.getElementById('chocolate') as HTMLSelectElement).value;
    const sauce = (document.getElementById('sauce') as HTMLSelectElement).value;
    const topping = (document.getElementById('topping') as HTMLSelectElement).value;

    let waffle = waffleTypes[waffleType]();
    waffle = chocolates[chocolate](waffle);
    waffle = sauces[sauce](waffle);
    waffle = toppings[topping](waffle);

    setSelectedWaffle(waffle);
  };

  return (
  <div className="flex flex-col items-center justify-center text-center w-full">
    <h1 className="text-3xl font-bold mb-8">Waffle Shop</h1>
    <div className="flex flex-wrap items-center justify-center mb-4">
      <div className="mx-4">
        <h2>Waffle Type</h2>
        <select id="waffleType">
          <option value="normal-waffle">Normal Waffle</option>
          <option value="gluten-free-waffle">Gluten Free Waffle</option>
          <option value="bubble-waffle">Bubble Waffle</option>
          <option value="belgian-waffle">Belgian Waffle</option>
        </select>
      </div>
      <div className="mx-4">
        <h2>Chocolate</h2>
        <select id="chocolate">
          <option value="nutella">Nutella</option>
          <option value="caramel">Caramel</option>
          <option value="dark-chocolate">Dark Chocolate</option>
          <option value="milk-chocolate">Milk Chocolate</option>
        </select>
      </div>
      <div className="mx-4">
        <h2>Sauce</h2>
        <select id="sauce">
          <option value="strawberry-sauce">Strawberry Sauce</option>
          <option value="caramel-sauce">Caramel Sauce</option>
          <option value="raspberry-sauce">Raspberry Sauce</option>
          <option value="chocolate-sauce">Chocolate Sauce</option>
        </select>
      </div>
      <div className="mx-4">
        <h2>Topping</h2>
        <select id="topping">
          <option value="strawberry">Strawberry</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="blueberry">Blueberry</option>
        </select>
      </div>
    </div>
    <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
      Place Order
    </button>
    {selectedWaffle && (
      <div className="text-left">
        <p>Waffle: {selectedWaffle.getDescription()}</p>
        <p>Price: ${selectedWaffle.getPrice()}</p>
      </div>
    )}
  </div>
  );
};

export default App;