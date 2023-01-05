import React from 'react';

const CartItem = (props) => {
        const {Price, Qty, Title, Img} = props.product;
        const {product, OnDecreaseQuantity, OnIncreaseQuantity, OnDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} src={product.Img} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{Title}</div>
                    <div style={{color: '#777'}}>${Price}</div>
                    <div style={{color: '#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-action">
                        {/* Action Buttons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick={() => {OnIncreaseQuantity(product)}}
                        />
                        
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        onClick={() => {OnDecreaseQuantity(product)}}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/484/484611.png" 
                        onClick={() => {OnDeleteProduct(product.id)}}
                        />
                    </div>
                </div>
            </div>
        );
    }

const style = {
    image: {
        height: 130,
        width: 110,
        borderRadius: 4,
        background: '#ccc',
    }
}

export default CartItem;