
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import data from "../data/products.json";

export const ItemListContainer = (props) => {
	const [products, setProducts] = useState([]);

	const {id} = useParams();

  useEffect(() =>{
    const getProducts = () =>{
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(data);
        }, 2000)
      })
    }

    getProducts().then((data) => { 
		if(id){
			const filteredData = data.filter((d) => d.category === id);
			setProducts(filteredData)
		} else{
			setProducts(data)
		}
		})
  }, [id])

	return (
		<ItemList products={products} />
	);
};
