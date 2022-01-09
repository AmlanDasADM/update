import React, { useState, useEffect } from 'react'
import axios from "axios"

function FormData()
{
    const [forms, setForms] = useState([])

    useEffect(() =>
    {
        axios.get("/get")
            .then(res => setForms(res.data))
            .catch(err => console.log(err))
    });

    const deleteArticle = id =>
    {
        axios.delete(`/delete/${id}`)
            .then(res => alert(res.data))
        setForms(forms.filter(elem => elem._id !== id))
  }
    
    return (
        <>
           
      
            <div className="heading">
            
                <h2> Here are our recived text,messages </h2>
              
            </div>
               

            {!forms.length ?
                
                <div className="container main">
                    {/* <p> Add Note to see Notes</p> */}
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                        </div>
                </div>
                
                
                : 
                    
                   
                    forms.map((form, key) =>
                (
          <div className="notes container" key={key}>
                         
                           
                        <div className="title ">
                        <h3>{form.name}</h3>
                        <h4>{form.email}</h4>
                        <p>{form.description}</p>
                                <div className="modal-body">
                                            {/* <Link to={{ pathname: `/update/${form._id}`}}> Edit </Link> */}
                                        <button onClick={()=> deleteArticle(form._id)}>Delete</button>
                                    </div>
                </div>
          </div>
   ))}
            

            </>
    )
}

export default FormData
