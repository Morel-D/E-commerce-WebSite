import { useState } from "react";
import FetchData from "./fetchData";

const Search = () => {

    const { data: items, error } = FetchData('http://localhost:8000/items');

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
        <div className="container my-4 py-5">
            <div className="conatiner my-4 py-5">
                <input type="text" placeholder="Enter a name" className="form-control" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="items my-3">
                <ul className="group-list">
                    {filterItem && filterItem.map((item) => ( 

                        <li className="list-group-item" key={item.id}>{item.itemName}</li>

                    )) }

                </ul>
            </div>
        </div>
     );
}
 
export default Search;