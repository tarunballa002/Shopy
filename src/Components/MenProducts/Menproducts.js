import React from 'react'
import all_product from '../Assets_two/all_product'
import Item from '../Item/item';
import './MenProducts.css'


const Menproducts = () => {
   const Menproductslist= all_product.filter(product => product.category === "men");

  return (
    <div className='Men-category'>
 <h1>Men Special</h1>
 <div className='Men-category-border'>
    <div className='Men-products'>
     {Menproductslist.map((item,i)=>{
        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
     })}
     </div>
    </div>
    </div>
  )
}

export default Menproducts