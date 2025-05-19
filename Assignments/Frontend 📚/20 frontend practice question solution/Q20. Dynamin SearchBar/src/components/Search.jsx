import React, { useState } from 'react'
const styles={
    container:{
      
    },
    searchBarContainer:{
     height:"8vh",
     width:"30vw",
     backgroundColor:"white",
     padding:"10px",
     borderRadius:"12px",
     
   
     

    },
    suggestionContainer:{
        marginTop:5,
       width:"30vw",
       padding:"20"
    },
    input:{
      width:"80%",
      height:"100%",
      border:"none",
      outline:"none",
      fontSize:20,

    },
    button:{
        width:"20%",
        height:"100%",
        borderRadius:12,
        border:"blue",
        backgroundColor:"lightblue",
       
    },
    suggestion:{
    width:"100%",
    height:"5vh",
    backgroundColor:"white",
    diplay:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginTop:3,
    

    },
    suggestionText:{
     textAlign:"center",
     fontSize:"15"
    }
}
const Search = () => {
    const baseUrl = "https://dummyjson.com/products/search?q=";
    const [query,setQuery] = useState("")
    const [suggestion,setSuggestion] = useState("")
    //handle change
    const handleChange = (e)=>{
   setQuery(e.target.value)
    }
    console.log(query);
  return (
    <div style={styles?.container}>

     <div style={styles?.searchBarContainer}>
        <input onChange={handleChange} value={query} type="text"  style={styles?.input}/>
        <button style={styles?.button}>Search</button>
     </div>
     <div style={styles?.suggestionContainer}>
        <div style={styles?.suggestion}>
        <p style={styles?.suggestionText}>Suggestion</p>
        </div>
        <div style={styles?.suggestion}>
        <p style={styles?.suggestionText}>Suggestion</p>
        </div>
        <div style={styles?.suggestion}>
        <p style={styles?.suggestionText}>Suggestion</p>
        </div>
     </div>
    </div>
  )
}

export default Search
