import React from 'react';

class CartItem extends React.Component {
    render () {

        // console.log('this.props', this.props);
        const { price , title, qty } = this.props.product;
        const {product , onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = this.props;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                    <div style={ { fontSize: 25 } }> {title} </div>
                    <div style={ { color: '#777' } }> Rs {price} </div>
                    <div style={ { color: '#777' } }> Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={() => onIncreaseQuantity(product)}
                            />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick={() => onDecreaseQuantity(product)}
                            />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
                            onClick={() => onDeleteQuantity(product.id)} 
                            />

                    </div>

                </div>
            </div>

        );
    }
}

const styles ={
    image: {
        height: 125,
        width: 114,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;