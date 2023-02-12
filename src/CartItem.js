import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        // console.log('this', this.state);
        //setState form 1 (setState will increase the quantity and rerender the updated quantity)
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState form 2 (if we require the previous state then we can use the second form but if we only have to change some value to another value means change some title then we have to use the first form)
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {

        const { qty } = this.state;

        if(qty === 0)
        {
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }

    render () {

        const { price , title, qty } = this.state;

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
                            onClick={this.increaseQuantity}
                            />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick={this.decreaseQuantity}
                            />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/484/484662.png" 
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