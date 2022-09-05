import React, { Component } from "react";
import "./App.css";
// import Home from "./pages/home/Home";
// import ProductsList from "./pages/products/ProductsList";
// import Product from "./pages/products/Product";
// import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Home /> */}
				{/* <ProductsList /> */}
				{/* <Product /> */}
				<Register />
			</div>
		);
	}
}

export default App;
