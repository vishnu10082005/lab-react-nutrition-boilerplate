const Search = (props)=>{

    const {setSearch} = props
    return(
      <>
        <h1>Search</h1>
        <input type="search" 
        
        style={{
          width:"400px",
          padding:"10px , 40px",
          fontSize:"large",
          borderRadius:"40px",
          height:"50px"
        }}  
        
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        
        placeholder="Your Food 😋"
        />
        
  
        {props.search && props.search.length === 0 ? (
          <p>Food not found</p>
        ) : null}
      
      
      </>
    )
  }
  
  export default Search
  