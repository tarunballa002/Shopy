import React from 'react'
import all_product from '../Assets_two/all_product'
import './kidProducts.css'
import Item from '../Item/item'

const kidProducts = () => {
    const kidproductslist= all_product.filter(product=>product.category==="kid")
  return (
    <div className='kid-category'>
 <h1>Kid Special</h1>
 <div className='kid-category-border'>
    <div className='kid-products'>
     {kidproductslist.map((item,i)=>{
        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
     })}
     </div>
    </div>
    </div>
  )
}

export default kidProducts