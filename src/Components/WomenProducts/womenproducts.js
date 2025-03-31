import React from 'react'
import all_product from '../Assets_two/all_product'
import Item from '../Item/item'
import './womenproducts.css'

const womenproducts = () => {

    const womenproductslist= all_product.filter(product=>product.category==="women");
  return (
    <div className='women-category'>
        <h1>Womens Special</h1>
        <div className='women-category-border'>
    <div className='women-products'>
     {womenproductslist.map((item,i)=>{
        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
     })}
     </div>
    </div>
    </div>
  )
}

export default womenproducts