import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { catalog } from './../../../data/mock';



class ProductList extends Component {

  constructor(){
    super();
    this.state = {
      data: null,
      id: null,
      imageURL: null,
      name: null,
      price: null,
      currency: null,
    }
  }

  getProducts(){
    const data = catalog.map();
    console.log(data);
    this.setState({data});
  }

  render() {
    const { data }
    return(

    )
  }



}

export default ProductList;

