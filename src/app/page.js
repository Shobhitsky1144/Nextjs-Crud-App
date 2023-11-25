"use client";
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [id, setId] = useState(null);
  const [toggle, settoggle] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit=()=>{
    if(!toggle){

      setList([...list,text])
      setText('')
    }else{
      const updatedList=list.map((elem,ind)=>ind===id?text:elem)
      console.log(updatedList)
      setList(updatedList)
      setText('')
      setId(null)
      settoggle(false)
    }
  }

  const deleteItem=(ind)=>{
    const data=list.filter((val,id)=>ind!==id);
    setList(data)
  }
  const editItem=(item,ind)=>{
    settoggle(true)
    setText(item)
    setId(ind)
  }

  return (
    <main >
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>{toggle ? "Edit" : "ADD"}</button>
      {
        list?.map((item,ind)=>{
          return(
          <div key={ind}>
            <h1 >{item}</h1><br/>
            <button onClick={()=>deleteItem(ind)}>Delete</button>
            <button onClick={()=>editItem(item,ind)}>Edit</button>
            </div>
          )
        })
      }
    </main>
  );
}
