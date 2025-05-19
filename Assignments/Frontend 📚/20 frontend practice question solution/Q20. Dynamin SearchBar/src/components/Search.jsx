import React, { useEffect, useState } from 'react'
const styles = {
    container: {

    },
    searchBarContainer: {
        height: "8vh",
        width: "30vw",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "12px",




    },
    suggestionContainer: {
        marginTop: 5,
        width: "30vw",
        padding: "20"
    },
    input: {
        width: "80%",
        height: "100%",
        border: "none",
        outline: "none",
        fontSize: 20,

    },
    button: {
        width: "20%",
        height: "100%",
        borderRadius: 12,
        border: "blue",
        backgroundColor: "lightblue",

    },
    suggestion: {
        width: "100%",
        height: "5vh",
        backgroundColor: "white",
        diplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 3,


    },
    suggestionText: {
        textAlign: "center",
        fontSize: "15"
    }
}
const Search = () => {
    const baseUrl = "https://dummyjson.com/products/search?q=";
    const [query, setQuery] = useState("")
    const [suggestion, setSuggestion] = useState([]);
    const [selectedIndex,setSelectedIndex] = useState(-1)
    //handle change
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    //console.log(query);
    const fetchData = async () => {
        const apiData = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data = await apiData.json();
        //console.log(JSON.stringify(data));
        setSuggestion(data.products)
    }

    //handle key functtion 
    const handleKeyDown = (e) => {
        if(suggestion.ength===0){
            setSelectedIndex(-1);
            return;
        }
        if (e.key === "ArrowDown") {
           if(selectedIndex<suggestion.length-1){
            setSelectedIndex(selectedIndex+1);
           }
        }
        else if (e.key === "ArrowUp") {
         if(selectedIndex>0){
            setSelectedIndex(selectedIndex-1);
         }
        }
        else {
         if(selectedIndex!==-1){
            setQuery(suggestion[selectedIndex].title);
            setSelectedIndex(-1);
            setSuggestion([]);
         }
        }
    }
    useEffect(() => {
        if (query.trim().length != 0) {
            fetchData()
        }

    }, [query])
    return (
        <div style={styles?.container}>

            <div onKeyDown={handleKeyDown} style={styles?.searchBarContainer}>
                <input onChange={handleChange} value={query} type="text" style={styles?.input} />
                <button style={styles?.button}>Search</button>
            </div>
            <div style={styles?.suggestionContainer}>
                {
                    query.trim().length != 0 && suggestion.map((item, idx) => {
                        return <div key={idx} style={{...styles?.suggestion,backgroundColor:selectedIndex===idx ?"lightgray":"white"}}>
                            <p style={styles?.suggestionText}>{item.title}</p>
                        </div>
                    }

                    )
                }


            </div>
        </div>
    )
}

export default Search
