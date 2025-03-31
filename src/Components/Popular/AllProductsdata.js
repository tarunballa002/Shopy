import React from 'react'
import all_product from '../Assets_two/all_product'
import Item from '../Item/item'
import './AllProducts.css'

const AllProductsdata = () => {
  return (
    <div className='allproducts-category'>
        <h1>Popular</h1>
        <div className='allproducts-category-border'>
    <div className='allproducts-products'>
     {all_product.map((item,i)=>{
        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
     })}
     </div>
    </div>
    </div>
  )
}

export default AllProductsdata