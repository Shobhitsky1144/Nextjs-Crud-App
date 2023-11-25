"use client";
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState({
    id:null,
    name:null
  });
  const [toggle, settoggle] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit=()=>{

    if(!toggle){

      setList([...list,text])
      setText({id:null,name:''})
    }else{
     const updatedList=list.map((elem)=>{
        return(
         
         elem.id===text.id?text:elem
        )
      })

      setList(updatedList)
      setText({id:null,name:null})
      setId(null)
      settoggle(false)
    }
  }

  const deleteItem=(ind)=>{
    const data=list.filter((val,id)=>ind!==id);
    setList(data)
  }
  const editItem=(item)=>{
    settoggle(true)
    setText({id:item.id,name:item.name})
    // setId(ind)
  }

  return (
    <main >
    
      <input type='text' value={text.name} onChange={(e) => setText({...text,id:list.length,name:e.target.value})} />
      <button onClick={handleSubmit}>{toggle ? "Edit" : "ADD"}</button>
      {
          list?.map((item)=>{
          return(
          <div key={item.id}>
            <h1 >{item.name}</h1><br/>
            <><button onClick={()=>deleteItem(item.id)}>Delete</button>
            <button onClick={()=>editItem(item)}>Edit</button> </>
            </div>
          )
        })
      }
    </main>
  );
}
