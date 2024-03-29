import Item from "./Item"

const ItemList= ({products}) => {

  return (
    <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.length > 0 ?
       products.map((product) => {
        return(
          <Item key={product.id} product={product} />
        )
       })
       :(<div class={"spinner-border text-secondary"} style={{width: '3rem', height: '3rem', role:'status'}}>
          <span class="visually-hidden">Loading...</span>
      </div>)}
    </div>
    

  )
}

export default ItemList

