import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super(); 
    this.state = {
        products: [
            {
                Price: 100,
                Qty: 10,
                Title: 'iPhone 12',
                Img: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
                id: 1
            },
            {
                Price: 111,
                Qty: 1,
                Title: 'Watch',
                Img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                id: 2
            },
            {
                Price: 112,
                Qty: 1,
                Title: 'Laptop',
                Img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80',
                id: 3
            }

        ]
    }
}

handleincreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].Qty  += 1;
    this.setState({
        products
    })
}

handledecreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].Qty === 0) {
        return;
    }
    products[index].Qty  -= 1;
    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items
    })
}

getCartCount = () => {
  const{ products } = this.state;
  let count =0;
  products.forEach((products) => {
    count += products.Qty;
  })
  return count;
}


cartTotalPrice = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.Qty * product.Price
  })
  return cartTotal;
}


  render () {
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={products}
      OnIncreaseQuantity={this.handleincreseQuantity}
      OnDecreaseQuantity={this.handledecreseQuantity}
      OnDeleteProduct={this.handleDeleteProduct}
      />

      <div style={{padding: 10, fontSize: 20, textAlign: 'center', background: 'yellow' }}><b>TOTAL: {this.cartTotalPrice()}</b></div>
    </div>
  );
}}

export default App;
