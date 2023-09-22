import React from 'react'


function Tour({ data }) {
  return (
    <>
    {data.map((element) => { 
      return (
        div
        <div key={element.id}
        style={{
            width:"200px",
            height:"500px",
            background:"#aaa"

        }}
        
        
        >{element.name}</div>
      )
    })}
    </>
  )
}

export default Tour