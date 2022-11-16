import { useEffect, useState } from "react";

const Product = ({ items }) => {
  
  let [value, setValue] = useState(1);
  let [itemName, setItemName] = useState();
  let [itemBody, setItemBody] = useState();
  let [quantity, setQuantity] = useState();
  let [price, setPrice] = useState();
  let [image, setImage] = useState();
  let [dataID, setID] = useState()


  useEffect(() => {

    items.map((item) => {
      setID(item.id);

    if (item.id == dataID)
    {
      
      fetch('http://localhost:8000/items/'+item.id)
        .then((res) => {
          if (!res.ok)
          {
            throw Error('Something went wrong')
          }
          return res.json()
        }).then((data) =>
        {
          

      
          setValue(1);
          setItemName(data.itemName);
          setItemBody(data.itemBody);
          setQuantity(data.quantity);
          setPrice(data.price);
          setImage(data.image)
            

        })
      } 
    })

   

  }, [])



  const addToChart = (id) => 
  {

    items.map((item) => {

      setItemName(item.itemName);
      setItemBody(item.itemBody);
      setQuantity(item.quantity);
      setPrice(item.price);
      setImage(item.image)

        let itemsDetails = { value, itemName, itemBody, quantity, price, image }
    
  
        fetch('http://localhost:8000/items/'+id, {
          method: 'PUT',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
          body: JSON.stringify(itemsDetails)
        })
      
      
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
                <form> 
                  <input type="text" value={item.itemName}  onChange={(e) => {setItemName(item.itemName)}} />
                  <input type="text" value={item.itemBody}  onChange={(e) => {setItemBody(e.target.value)}}/>
                  <input type="text" value={item.quantity}  onChange={(e) => {setQuantity(e.target.value)}}/>
                  <input type="text" value={item.price}   onChange={(e) => {setPrice(e.target.value)}}/>
                  <input type="text" value={item.value}  onChange={(e) => {setValue(e.target.value)}}/>
                  <input type="text" value={item.image}  onChange={(e) => {setImage(e.target.value)}}/>
                  
                  
                  <button className="btn text text-white bg-dark p-2" onClick={(e) => { e.preventDefault();   addToChart(item.id)}} > <i className="bi bi-cart"></i></button> 
                </form> 
                <p>{value}</p>
                     </div>
                      </div>
                    </div>
               </div>
            </div>
           ))
       
     
       
     );
}
 
export default Product;