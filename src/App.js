import React, {useState, useEffect } from 'react';
import {TextField , Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase.js';
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
import './App.css';
const q=query(collection(db,'todos'),orderBy('timestamp','desc'));
function App() {
const [todos,setTodos]=useState([]);
const [input, setInput]=useState('');
useEffect(() => {
onSnapshot(q,(snapshot)=>{
setTodos(snapshot.docs.map(doc=>({
id: doc.id,
item: doc.data()
})))
})
},[input]);
const addTodo=(e)=>{
e.preventDefault();
addDoc(collection(db,'todos'),{
todo:input,
timestamp: serverTimestamp()
})
setInput('')
};
return (
<div className="App">
<img src={"/fotokita.jpg"} style={{border: "1px solid #ddd", borderRadius: "10px", padding: "5px", width: "150px"}}/>
<h2> Catatan Berdua (Dhea dan Dicky) </h2>
<form>
<TextField id="outlined-basic" label="buat catatan" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input}
onChange={e=>setInput(e.target.value)} />
<Button variant="contained" color="primary" onClick={addTodo}  >tambah catatan</Button>
</form>
<ul>
{todos.map(item=> <Todo key={item.id} arr={item} />)}
</ul>
</div>
);
}
export default App;