import { useState, useEffect } from 'react'

function useFetchData(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [url]);
    return data;
}

export default useFetchData
