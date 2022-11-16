import React, { useState } from "react";

const Table = ({ items }) => {
    
    let [counter, setCounter] = useState()
    let [total, setTotal] = useState(0)

    let [value, setValue] = useState();
    let [price, setPrice] = useState()
    let [itemName, setItemName] = useState();
    let [itemBody, setItemBody] = useState();
    let [quantity, setQuantity] = useState();
    let [image, setImage] = useState();
    let [amount, setAmount] = useState();


    const handleIncrement = (id) => 
    {

        items.map((item) => {
            
            if (item.id == id)
            {
                if (item.amount >= item.quantity)
                {
                 // Stopp sss //     
                } else
                {
                    setCounter(item.amount++);


                    total = items.reduce((total, item) => total = total + (item.price * item.amount), 0);
                    setTotal(total)



                    // setTotal(total += item.price * item.amount)
                    // setPrice(item.price)
                    // setAmount(item.amount)
                    // console.log(price * amount)
                }     
            }

        })  

        
    }

 


    const handleDecrement = (id) => 
    {

        items.map((item) => {
            if (item.id == id)
            {
                if (item.amount <= 0)
                {
                  // Stopp sss //    
                } else {
                    setCounter(item.amount--);
                    total = items.reduce((total, item) => total = total - (item.price * item.amount) , 0);
                    setTotal(-(total))
                }
                
            }
        })  
    }


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



    return ( 
        <React.Fragment>
          <tbody>
              {  items.map((item) => (
             
                   <tr key={item.id}>
                       <td><input type="checkbox" /></td>
                           <td>{item.itemName}</td>
                           <td>{item.quantity}</td>
                           <td>{item.price}</td>
                       <td>
                           <button className="btn text text-danger" onClick={() => {handleDecrement(item.id)}}>-</button>
                                 <span className="badge bg-dark p-3">{item.amount}</span>
                           <button className="btn text text-warning" onClick={() => {handleIncrement(item.id)}}>+</button> 
                       </td>
                       <td>{item.price * item.amount}Frs</td>
                       <td><button className="btn btn-danger" onClick={(e) => { e.preventDefault(); window.location.reload(); removeChart(item.id)}}>Delete</button></td>
                   </tr>
  
              ))}
         </tbody>
         <tfoot className="my-5">
            
            <td colSpan={7} className='text-end' ><label>Total <span className="badge bg-white mx-2 shadow p-3 mb-2 bg-body rounded text-dark">{total} Frs</span></label> 
               <button className="btn btn-dark bg-dark mx-4 px-3">Buy</button></td>
            
        </tfoot> 

             </ React.Fragment>      
     );
}
 
export default Table;