
import { useEffect,useState } from 'react';
import './App.css';
import useFetch from './useFetch';

function App() {

  const [data] = useFetch("http://localhost:8765/api/products.json");

  useEffect(() => {}, []);

  //const[data,setData] = useState(null);
  
  // useEffect(() => {
  //    //fetch("https://jsonplaceholder.typicode.com/todos")//here data is in array format
  //    fetch("http://localhost:8765/api/products.json") //here data is in json object form
  //      .then((res) => res.json())
  //      //.then((data) => setData(data));
  //      .then((data) =>  {
  //        setData(data.data)
  //      });
  // },[]);

    return (
        <div className="App">
           
           {data && 
             data.map((item,index) => {
              return (
              <p key={index}>
                {item.id}. {item.Name}
              </p>  //{item.title}
          );
    }) }
    </div>   
  );
}

export default App;
