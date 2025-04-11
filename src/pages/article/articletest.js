import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleRow from './article_row';
import { Button, Modal } from 'react-bootstrap';



let Articletest = ()=>{

  
  const page_title = 'Article List';
  const[data,setdata] = useState();
  const[data2,setdata2] = useState();
  const[deleted_id,set_deleted_id] =  useState();


  let type ='I';
  let status = 'A';
  
  const [isChecked, setIsChecked] = useState(false);
  const [chk_ids , set_chk_ids] = useState([]);
  const [chk_ids1, set_chk_ids1] = useState({});

  ///  Search  //

  const [searchText, setSearchText] = useState('');

  //   model window 

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  ///  model window code 


  const handleCheckboxChange  = (id) => {
  
   set_chk_ids([...chk_ids, id]);
   set_chk_ids1({ ...chk_ids1, [id]: id});

  };

  const handleDelete = (id) => {

    alert('Delete handle '+id);
    set_deleted_id(id);

  //  let data_online =  await axios.get('https://jsonplaceholder.typicode.com/posts');
   //  const filteredData = data_online.data.filter((item) =>{ return item.id > 90});

     //console.log('chk_ids' , chk_ids);
   
  };

  async function get_data()
  {
     let data_online =  await axios.get('https://jsonplaceholder.typicode.com/posts');
     const filteredData = data_online.data.filter((item) =>{ return item.id > 90});

     console.log('function called  .....');
    // console.log(data_online.data);
     setdata(filteredData);
  }
 

  useEffect(()=>{

 
      get_data();
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
       // console.log('GITHUB START.. ', data);
        setdata2(data); // Assuming setdata2 is a function to set the data in your component's state or variable
    
        const names = data.map(person => person.name).join("\n");
        console.log(names);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
     


  },[deleted_id]);

  const array_obj =[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }];

  const newArray = array_obj.map((element, index, arr) => {
    console.log(`Element: ${element}`);
    console.log(`Index: ${index}`);
    console.log(`Array: ${arr}`);
    
    return element;
  });
  
  const applySearch = () => {

    console.log('Searching for:', searchText);
    const regex = new RegExp(searchText, 'i');
    const filteredData = data.filter(item => regex.test(item.title) || regex.test(item.body));
    console.log('Filtered data:', filteredData);
    setdata(filteredData);

    // Implement your search logic here
   //    alert(searchText);
  };
   
  const handleInputChange = (event) => 
  {
    setSearchText(event.target.value);
  };


  return (
    <div>  <h1>{page_title}  {JSON.stringify(chk_ids)}   
    <pre>
    {JSON.stringify(chk_ids1)}   
    </pre>
    </h1>  
    
      <Button variant="primary" onClick={openModal}>
        Open Modal
      </Button>
      <div style={{ border: '1px solid', padding: '5px' }}>
        {array_obj && array_obj.map((data, index, complete_array) => {
          return (
            <>
              <div style={{ float: 'left', padding: '15px' }}>{data.id}</div>
              <div style={{ padding: '15px' }}>{data.title}</div>
            </>
          );
        })}
      </div>
      <span style={{ color: 'black', fontSize: '15px' }}>NTT DATA   
      <div><input
        style={{ width: '260px' }}
        type='text'
        name='search'
        value={searchText}
        onChange={handleInputChange}
      />
      <button name='btnsearch' id='btnsearch' onClick={applySearch}>
        Go
      </button></div>
      
        <pre>{ /*
      JSON.stringify(data2, null, 2) */ }</pre> 
      
      </span>

          
        {data2  &&    data2.map((item, index )=>(<>

                
            
        
        
        
        </>))}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        {
        
        (type=='A' ||  status=='A' )  ?  <p>All active displayed below
          
          </p>  : <p>All inactive displayed below </p>
        
        
        }

        {data && (type=='A' ||  status=='A') && data.map((item, index) => (
        <>
           <ArticleRow data={item}  data_index={index} handleDelete ={handleDelete} handlerOnChange={handleCheckboxChange}/>

           </>))}
      </tbody>
    </table>

    <Button variant="primary" onClick={openModal}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the content of the modal.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}


export default Articletest;