import React from 'react';


function Tour({ data, removeTour }) {

 

  return (
    <>
    <div style={{
        display:"flex",
        flexFlow:"row wrap",
        padding:"auto 500px",
        width:"100%",
        height:"100%",
        gap:"150px",
        justifyContent:"center",
        alignItems:"center",
        

    }}>
    {data.map((element) => { 
      const { id, name, info, image, price} = element
      return (
        <div key={id}
        style={{
            width:"300px",
            height:"400px",
            background:"#eee",
            overflow:"hidden"
            }}>
              <img src={image} alt="zdjecie" 
              style={{
                width:"100%",
                height:"50%",
                top:"0",
                left:"0",
              }}/>
              <h2 style={{
                fontSize:"1.2rem",
                margin:"10px auto"
              }}>{name}</h2>
              <span
              style={{
                fontSize:"0.9rem",
                overflow:"hidden",
                display:"block",
                height:"30%"
              }}
              >${info.substring(0,300)}...</span>
              <button onClick={() => removeTour(id)} style={{
                width:"100%",
                height:"40px",
                backgroundColor:"rgb(255,0,0)",
                bottom:"0",
                cursor:"pointer"
              }}>DELETE</button>

        </div>
      )
    })}
    </div>
    </>
  )
}

export default Tour