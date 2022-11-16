import FetchData from "./fetchData";
import Table from "./table";


const View = () => {
    
    const { data: items, error } = FetchData('http://localhost:8000/items');


    return ( 
        
        <div className="container my-5">
            <br />
            <h2 className="my-5">Edit Items</h2>
            <div className="shopping my-5">
                <table className="table table-sm">
                    <thead>
                    <tr>
                      <th scope="col"><i className="bi bi-trash"></i></th>
                      <th scope="col">ItemName</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Total</th>
                      <th scope="col">Action</th>       
                    </tr>
                    </thead>
                  
                      {items && <Table items={items.filter((item) =>item.value > 0)} />}
                    
                </table>    
                
            </div>
            </div>
             
     );
}
 
export default View;