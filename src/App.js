import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import Usercard from './component/Usercard';
import Userlist from './component/Userlist';



function App()  {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setusers(response.data);
      })
  }, []);
  console.log(users);
  return (
    <div className="App">
      <Userlist  users={users}/>
    
    </div>
  );
}

export default App;