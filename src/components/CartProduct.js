import React from 'react'

const CartProduct = ({item, incrementQuantity, decrementQuantity, removeFromCart}) => {
  return (
    <div className='cart_deta'>
      <img src={item.image} alt={item.name}/>
      {item.name} - {item.price} - Quantity: {item.quantity}
      <button onClick={() => incrementQuantity(item.id)}>+</button>
      <button onClick={() => decrementQuantity(item.id)}>-</button>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  )
}

export default CartProduct