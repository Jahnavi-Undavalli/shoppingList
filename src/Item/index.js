// Item.js
import React from 'react';
import './index.css';

const Item = (props) => {
  const { name, purchased, togglePurchased, deleteItem } = props;

  return (
    <li className="comment-item" >
      <p className="username" style={{ textDecoration: purchased ? 'line-through' : 'none' }}>{name}</p> 
      
        <div className="purchase-container">
          <button
            className="button1"
            type="button"
            onClick={togglePurchased}
          >
            {purchased ? 'Mark as Unpurchased' : 'Mark as Purchased'}
          </button>
        </div>
        <button
          className="button1"
          type="button"
          onClick={deleteItem}
          data-testid="delete"
        >
        <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      
      <hr className="comment-line" />
    </li>
  );
};

export default Item;
