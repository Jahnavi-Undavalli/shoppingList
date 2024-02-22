import React, { useState } from 'react';
import Item from '../Item';
import './index.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { name: inputValue, purchased: false }]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const togglePurchased = (index) => {
    const updatedItems = [...items];
    updatedItems[index].purchased = !updatedItems[index].purchased;
    setItems(updatedItems);
  };

  const renderItems = () => {
    let filteredItems = items;
    if (filter === 'unpurchased') {
      filteredItems = items.filter((item) => !item.purchased);
    } else if (filter === 'purchased') {
      filteredItems = items.filter((item) => item.purchased);
    }

    return filteredItems.map((eachItem, index) => (
      <Item
        key={index}
        name={eachItem.name}
        purchased={eachItem.purchased}
        togglePurchased={() => togglePurchased(index)}
        deleteItem={() => deleteItem(index)}
      />
    ));
  };

  return (
    <div className='app-container'>
      <h1 className='heading'>Shopping List</h1>
      <div className='list-container'>
        <form onSubmit={(e) => { e.preventDefault(); addItem(); }} className='form'>
          <div className='form-container'>
            <p className='paragraph'>Add items to get added into the list</p>
            <input
              type="text"
              className='input-value'
              placeholder='enter any item'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit' className='button'>Add Item</button>
          </div>
        </form>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
        />
      </div>
      <hr className="line" />
      <div className='filter-container'>
      <p className='paragraph'>
        <span>List of Items</span></p>
        <div>
          <button className='each-button' onClick={() => setFilter('all')} >All</button>
          <button className='each-button'  onClick={() => setFilter('unpurchased') }>Unpurchased</button>
          <button className='each-button' onClick={() => setFilter('purchased')}>Purchased</button>
        </div>
        </div>
      <ul className='list-items'>{renderItems()}</ul>
    </div>
  );
};

export default ShoppingList;
