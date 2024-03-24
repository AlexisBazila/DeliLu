
import React, { useEffect, useState } from 'react'
import data from "../data/products.json";

const ItemDetailContainer = () => {

 const [products, setProducts] = useState([]);

  const getProducts = () =>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(data);
      }, 2000)
    })
  }
  
  useEffect(() =>{
    getProducts().then((data) => { setProducts(data)})
  }, [])


  return (
    <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.length > 0 ?
       products.map((product) => {
        return(
          <div class={"card"} style={{width: '18rem'}}>
            <img src={product.pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.product}</h5>
              <p class="card-text">{"$"+product.price}</p>
              <p class="card-text">{product.Description}</p>
              <a href="#" class="btn btn-primary">Add to car</a>
            </div>
          </div>
        )
       })
       : "Charging products..."}
    </div>
    

  )
}

export default ItemDetailContainer

