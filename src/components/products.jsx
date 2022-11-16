import React, { useEffect, useState } from "react";

const Product = ({ items }) => {
  
  let [value, setValue] = useState();
  let [itemName, setItemName] = useState();
  let [itemBody, setItemBody] = useState();
  let [quantity, setQuantity] = useState();
  let [price, setPrice] = useState();
  let [image, setImage] = useState();
  let [amount, setAmount] = useState();



// Add to chart   
  const addToChart = (id) => 
  {  
    items.map((item) => {


      itemName = item.itemName
      itemBody = item.itemBody
      quantity = item.quantity
      image = item.image
      price = item.price
      amount = item.amount
      value = 1

      if (item.id == id)
      {
        let itemsDetails = { value, itemName, itemBody, quantity, price, image, amount}
    
  
        fetch('http://localhost:8000/items/'+item.id, {
            method: 'put',
            headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }, 
            body: JSON.stringify(itemsDetails)
          })
         }
      
      
    })



      }

  
 // Remove form the carts
 
  const removeChart = (id) => 
  {

    items.map((item) => {


      itemName = item.itemName
      itemBody = item.itemBody
      quantity = item.quantity
      image = item.image
      price = item.price
      amount = item.amount
      value = 0

      if (item.id == id)
      {
        let itemsDetails = { value, itemName, itemBody, quantity, price, image, amount}
    
  
        fetch('http://localhost:8000/items/'+item.id, {
            method: 'put',
            headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }, 
            body: JSON.stringify(itemsDetails)
          })
         }
      
      
    })
  }
  




// Serch bar item
  
    const getFilterItem = (search, items) =>
    {
        if (!search)
        {
          return items
        }
      return items.filter((item) => item.itemName.includes(search.toUpperCase()))  
        
    }
        
          
    

    const [search, setSearch] = useState('')

    const filterItem = getFilterItem(search, items)
  



   

  return (  
    <React.Fragment>

      <div className="mb-5">
         <input type="text" placeholder=" Enter product name" className="form-control"  onChange={(e) => {setSearch(e.target.value)}}/>
      </div>
      
      {filterItem.map((item) => ( 

         <div className="col col-4 my-4" key={item.id}>
                  <div className="card">
                       <img src={require(`${item.image}`)} className="card-img-top" alt="..." />
                       <div className="card-body">
                           <div className="row">
                      <div className="col text-start"> <h5 className="card-title">{item.itemName}</h5></div>
                      <div className="col text-end mx-4">   <span className="badge bg-dark ms-auto p-2">{item.quantity}</span></div>
                           </div>    
                    <p className="card-text">{item.itemBody}</p>
                         <div className="row">
                      <div className="col text-start"><span className="badge bg-dark p-3">{item.price} Frs</span></div>
                        <div className="col text-end" >
                   <form> 
                     <button className="btn btn-outline-dark text text-white p-2 mx-2" onClick={(e) => { e.preventDefault(); window.location.reload(); removeChart(item.id)}} ><i className="bi bi-cart-x-fill text-dark"></i></button> 
                     <button className="btn text text-white bg-dark p-2" onClick={(e) => { e.preventDefault(); window.location.reload(); addToChart(item.id)}} > <i className="bi bi-cart"></i></button> 
                   </form> 
                 </div>

                         </div>
                       </div>
                  </div>
               </div>
              ))
          
             } 
    </React.Fragment>   
     );
}
 
export default Product;