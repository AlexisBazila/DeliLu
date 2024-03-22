import React from 'react'
import { resolveConfig } from 'vite'
import data from "../data/products.json";

const ItemDetailContainer = () => {

  productos = [];

  const getProducts = () =>{
    return new Promise((resolve, reject) => {
        resolve(data);
    })
  }
  
  getProducts().then((res) =>{
    productos = res;
  })

  return (
    <div>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default ItemDetailContainer

