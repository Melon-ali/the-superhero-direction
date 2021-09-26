import React from 'react';

const Cart = (props) => {

    const {cart}= props || {}

    // reduce use of cart

    const totalReducer=(previousValue,currentValue)=>parseFloat(previousValue) + parseFloat(currentValue.donate)

    const total=cart.reduce( totalReducer, 0)

    return (
        <div>
            <h2><i class="fas fa-hand-holding-medical"></i>
                {cart.length}
            </h2>
            <h3>$ {total}</h3>

            <ul>
                {
                    cart.map(doner=> <li>{doner.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;