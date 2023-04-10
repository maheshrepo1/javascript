import React, { useState, useEffect ,useRef} from "react";
import userList from "./usersdata"; //Just some fake data

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const [search2 , setSearch2] = useState(null);
  const refContainer = useRef(null);

  useEffect(() => {
    getUsers(userList);
  }, []);

  //Simulating making api call with useEffect
  const getUsers = userList => {
    setUsers(userList);
  };

  const byCategory = (user, category) => {
    if (category) {
      return user.category === category;
    } else return user;
  };
  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const search_list = ( )=>{

     users.filter(user => bySearch(user, search));
     users.filter(person => person.age);


  }

  

  const filteredList = (users, category, search,search2) => {

      if(search2)
      {
        search = search2;
      }
      return users
      .filter(user => byCategory(user, category))
      .filter(user => bySearch(user, search));
  };

  return (
    <div className="App" style={{border:"1px solid red"}} >
       <div  style={{float:"left",width:"350px",border:"1px solid",padding:"10px 10px",margin:"10px"}}> <input
        type="search" onChange={e => setSearch2(e.target.value)}
        placeholder="search keyword ..." ref={refContainer}
      /> </div>   

      <div  style={{float:"left",width:"350px",border:"1px solid",padding:"10px 10px",margin:"10px"}}> <input
              type="search"
              placeholder="search..."
              onChange={e => setSearch(e.target.value)}  value={search2}
            /></div> 


        <div  style={{float:"left",width:"350px",border:"1px solid",padding:"10px 10px",margin:"10px"}}>
              <select onChange={e => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                <option value="movies">Movies</option>
                <option value="games">Games</option>
                <option value="shows">Shows</option>
                <option value="other">Other</option>{" "}
              </select> </div>
          
              <div style={{border:"1px solid blue",width:"1100px" }}>
                {filteredList(users, category, search ,search2).map(user => (
                  <div  key={user.id} style={{border:"0px",width:"1100px" }} >
                    {user.name} : {user.category}
                  </div>
                ))}
             </div>

    </div>
  );
}

export default Users;
