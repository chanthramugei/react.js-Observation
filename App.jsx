import React ,{useEffect,useState}from 'react'

function Fakestoreapi() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then((data)=>setProducts(data))
    },[])
  return (
    <div style={Styles.Card}>
        <img src={products.image} alt="" style={Styles.img}></img>
        <h1>{products.title}</h1>
        <p><b>Price:</b>${products.price}</p>
      
    </div>
  )
}
const Styles={
    Card:{
        width:"300px",
        border:"1px solid #ccc",
        padding:"15px",
        borderRadius:"8px",
        margin:"20px auto"
    },
    img:{
      width:"100%",
      height:"200px",
      objectfit:"contain"
    }
}

export default Fakestoreapi
