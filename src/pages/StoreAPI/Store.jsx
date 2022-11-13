import React, { Component } from "react";
import axios from "axios";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

export default class Store extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      searchTerm: "",
    };
  }

  fetchProducts = async () => {
    let url = "https://dummyjson.com/products";
    if (this.state.searchTerm) {
      url += `/search?q=${this.state.searchTerm}`;
    }

    try {
      const response = await axios.get(url);
      // Call API thành công
      this.setState({ products: response.data.products });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchProducts();
    }
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">Cybersoft Store</h1>

        <div className="row">
          <div className="col-3">
            <ProductFilter onSearch={this.handleSearch} />
          </div>

          <div className="col-9">
            <ProductList products={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}
