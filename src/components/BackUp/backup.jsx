import { useState } from "react";

const Product = ({ items }) => {
  

  let [value, setValue] = useState(0);
  // let [itemBody, setItemBody] = useState(null);
  // let [quantity, setQuantity] = useState(null);
  // let [price, setPrice] = useState(null);
  // let [image, setImage] = useState(null);
  // let [itemName, setItemName] = useState(null);

   

 
  // Increase the number 
  const handleIncrement = (id) => 
  {

    items.filter((item) => {
      if (item.id == id)
      {

        if (item.value >= item.quantity)
        {
              // console.log('off limits');
          setValue(1)
        } else {
          
    fetch('http://localhost:8000/items/'+id, {
      method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },  
      body: JSON.stringify({value})
    }).then(() => {

      if (value != value)
      {
        console.log('This value is not Zero')
        setValue(1)
        item.value++;
        setValue(item.value+1)
      } else
      {

          item.value++;
          setValue(item.value+1)
        }
    })

                 }  
      }
      
    }) 
      // return counter;
        // if (item.value >= item.quantity)
        // {
        //   console.log('off limits');
        //   setCounter(false)
          
        // } else {
        //   setCounter(item.value++);
      
      
      
  }
  


  // Decrease the number
   const handleDecrement = (id) => 
   {
    items.map((item) => {
      if (item.id == id)
      {
     
        if (item.value <= 0)
        {
          console.log('off limits')
          setValue(false)
        } else {
          setValue(item.value--);
        }
        return value
      }
      
    })
     
    
  }
  



   

  return (  
           items.map((item) => ( 
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
                          <button className="btn text text-danger" onClick={() => {handleDecrement(item.id)}}>-</button> <input type="text" value={item.value} onChange={(e) => {setValue(e.target.value)}} /> <button className="btn text text-warning" onClick={() => {handleIncrement(item.id)}}>+</button>

                     </div>
                      </div>
                    </div>
               </div>
            </div>
           ))
       
     
       
     );
}
 
export default Product;