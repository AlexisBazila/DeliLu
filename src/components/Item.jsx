import React from 'react'

const Item = ({product}) => {
  return (
    <div>
      <div class={"card"} style={{width: '18rem', margin: '1rem'}}>
            <img src={product.pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.product}</h5>
              <p class="card-text">{product.category}</p>
              <p class="card-text">{"$"+product.price}</p>
              <p class="card-text">{product.Description}</p>
              <a href="#" class="btn btn-primary">Add to car</a>
            </div>
          </div>
    </div>
  )
}

export default Item
