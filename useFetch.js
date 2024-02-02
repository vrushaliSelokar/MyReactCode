 import { useEffect,useState } from "react";

const useFetch = (url) => {

    const[data,setData] = useState(null);

    useEffect(() => {
        loadData(url);
    },[]);
    
    const loadData = async (url) =>{
        //fetch("https://jsonplaceholder.typicode.com/todos")//here data is in array format
        const response = await fetch(url); //here data is in json object form("http://localhost:8765/api/products.json")
          
        const responseJSON = await response.json();
        
        const temp = responseJSON.data;
        setData(temp);// setData(data.data)
     };
     
     return [data];
}

export default useFetch;