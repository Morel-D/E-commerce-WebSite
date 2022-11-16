import { useEffect, useState } from "react";

const FetchData = (url) => {

    const [data, setData] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((resource) => {
                if (!resource.ok)
                {
                    throw Error('Could not fetch data')
                }
                return resource.json()
            }).then((jsonData) => {
            setData(jsonData)
            }).catch((error) =>
            {
                setError(error)
        })
    }, [url])

    return {data, error}
    
}
 
export default FetchData;