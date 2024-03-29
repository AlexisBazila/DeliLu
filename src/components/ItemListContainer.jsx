
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import data from "../data/products.json";

export const ItemListContainer = (props) => {
	const [products, setProducts] = useState([]);

  useEffect(() =>{
    const getProducts = () =>{
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(data);
        }, 2000)
      })
    }

    getProducts().then((data) => { setProducts(data)})
  }, [])
  
	return (
		<div style={{ display: 'flex', alignItems: 'center'}}>
			{/* <h1>{props.greetings}</h1> */}
			<ItemList products={products} />
		</div>
	);
};
