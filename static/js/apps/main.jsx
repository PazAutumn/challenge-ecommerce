import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { catalog } from './../../../data/mock';

const Total = ({ total, price, id }) => <p>{total}{price}, id: {id}</p>


const App = ({ message }) => <div>{ message }</div>;

    const ListItem = ({ imageURL, name, currency, price, id }) =>
    catalog.map((data) =>
      <div className="container" key={data.id}>
        <img src={ data.imageURL } width="150px" height="150px" alt={data.id}/>
        <p>{ data.name }</p>
        <p>{ data.currency }{ data.price }</p>
        <button id="btn" value={data.id} onClick={ addToCart }>Add to Cart</button>
      </div>
    );

function addToCart({ListItem}) {
  const total = 0;
  console.log(total);
  const btn = document.getElementById('btn');
  console.log(btn)

  /*ReactDOM.render(<Total total="Total: " id={data.id} price={total + data.price} />, document.getElementById('total'))*/
}


ReactDOM.render(<App message="Product List" />, document.getElementById('app'));
ReactDOM.render(<ListItem />, document.getElementById('products'));
