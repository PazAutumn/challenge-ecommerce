import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { catalog } from './../../../data/mock';


const App = ({ message }) => <div>{ message }</div>;

    const ListItem = ({ imageURL, name, currency, price, btn }) =>
    catalog.map((data) =>
      <div className="container">
        <img src={ data.imageURL } width="150px" height="150px" alt="placeholder+image"/>
        <p>{ data.name }</p>
        <p>{ data.currency }{ data.price }</p>
        <button onClick="">Add to Cart</button>
      </div>
    )


ReactDOM.render(<App message="Product List" />, document.getElementById('app'));
ReactDOM.render(<ListItem />, document.getElementById('products'));
