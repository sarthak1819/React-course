
import './App.css'

function App() {

  //for clearing localstorage
  //localStorage.clear();


  //for setting item in localstorage
  // localStorage.setItem("name","sarthak");

  //for getting item from localstorage
  // const value =localStorage.getItem("name")
  // console.log(value);

  //for removing item from localstorage
  // const remove = localStorage.removeItem("name")
  // console.log(remove);

  //for storing array in localstorage
  const arr ={
    name:"sarthak",
    age:22,
    city:"delhi"
  };
  //convert obj into string
  //localStorage.setItem("arr",JSON.stringify(arr))

  //convert string into object
  const data =JSON.parse(localStorage.getItem("arr"))
  console.log(data );
  
  
    
  return (
    <>
     <h1>
      localStorage 

     </h1>
    </>
  )
}

export default App
