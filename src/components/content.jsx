import { useState } from "react";
import FetchData from "./fetchData";
import Product from "./products";

const Content = () => {

    const { data: items, error } = FetchData('http://localhost:8000/items');


    // const getFilterItem = (search, items) =>
    // {
    //     if (!search)
    //     {
    //         return items
    //     }
    //     return items.filter((item) => item.itemName.includes(search.toUpperCase()))
    // }

    // const [search, setSearch] = useState('')

    // const filterItem = getFilterItem(search, items)




    return ( 
        <div className="body my-5">

             <div  style={{backgroundColor: 'rgb(244, 228, 206)'}}>
                     <div className="container mt-5">
                        <div className="row">
                            <div className="col col-8 col_sm-6 text-start p-5">
                                <h1 className="mt-5" style={{fontSize: '75px', fontFamily: 'Franklin Gothic Medium,  Arial Narrow Arial, sans-serif'}}>African <br/> fashion</h1>
                                <p> African clothing, the right attire to transform your look <br /> and boost your confidence this season</p>
                         
                                <button className="btn btn-dark p-3">Shop Now</button>
                            </div>    
                        
                            <div className="col col_sm-6" id="image">
                            </div>
                        <div>
                     </div>
                   </div>
                </div>
               </div>  


            <div className="container p-4">
                <div className="container">
                    <div className="row">
                        <div className="col text-start">
                           <h2 className="mb-4">Product Grid</h2>
                        </div>
            
                        {/* <div className="col text-end">
                            <button className="btn btn-dark">Add Your product</button>
                        </div> */}
            
                        <div className="col col-1 text-end">
                            <div className="dropdown open ms-auto">
                                <button className="btn btn-white dropdown-toggle shadow p-2 mb-4 bg-body rounded" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            Filter
                                </button>
                                <div className="dropdown-menu" aria-labelledby="triggerId">
                                    <button className="dropdown-item" href="#">Action</button>
                                    <button className="dropdown-item disabled" href="#">Disabled action</button>
                                </div>
                            </div>
                        </div>
                       
            
                        <form>
                            {/* <input type="text" placeholder=" Enter product name" className="form-control" onChange={(e) => {setSearch(e.target.value)}} /> */}
                        </form>
                    </div> 
                </div>
            </div>   


            <div className="products container px-4">
             <div className="row">
                    {items && <Product items={items} />}
             </div> 
            </div>

        </div>       
     );
}
 
export default Content;