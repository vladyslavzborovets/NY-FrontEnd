 
import { useState, useEffect } from 'react'
import axios from 'axios'   

//pass props in forms
const Forms = (props) => {

    //state hooks
    const [forms, setForms] = useState([]) //hooks for post where array will past
    const [title, setTitle] = useState('') // hooks for titles
    const [image, setImage] = useState('') // hook for images
    const [location, setLocation] = useState('') // hook for location
    const [description, setDescription] = useState('') // hook for description
    
    
    //useeffects 
    // useEffect(()=> {
    //     //.get heroku backend
    //     .get()
    //     .then((response)=> {
    //         setForms(response.data)
    //     })
    // })

    //handler
    //title, .... e is for event 
    const handleNewTitleChange = (e) => {
        setTitle(e.target.value)
      }

      //image
      const handleNewImageChange = (e) => {
        setImage(e.target.value)
     }

     const handleNewLocationChange = (e) => {
        setLocation(e.target.value)
      }

      const handleNewDescriptionChange = (e) => {
        setTitle(e.target.value)
      }

      //updates
      const handleUpdateTitle = (e) => {
        setTitle(e.target.value)
      }

      const handleUpdateImage = (e) => {
        setImage(e.target.value)
      }

      const handleUpdateLocation = (e) => {
        setLocation(e.target.value)
      }

      const handleUpdateDescription = (e) => {
        setDescription(e.target.value)
      }
    //New
    const handleNewFormsSubmit = (e) => {
        e.preventDefault()
        axios.post(
          // 'http://localhost:3000', herokus goes here ''
          '',
          {
            title: title,
            image: image,
            location: location,
            description: description,

          }
        ).then( () => {
          axios
            // .get('http://localhost:3000') heroku goes here ''
            .get('')
            .then((response) => {
              setForms(response.data)
            //   document.getElementById("add-post").reset()
              
            })
        })
      }

      //update forms
      const handleUpdateForms = (formsData) => {
        axios
        .put(
          // `http://localhost:3000/${formsData._id}`, heroku goes here ''
          ``,
          {
            title: title,
            image: image,
            location: location,
            description: description,
          }
        ).then( () => {
          axios
            // .get('http://localhost:3000') heroku goes here ''
            .get('')
            .then((response) => {
              setForms(response.data)
            //   document.getElementById('edit-forms').reset()
            })
        })
      }

      const handleDelete = (formtData) => {
        axios
          // .delete(`http://localhost:3000/${formData._id}`) heroku goes here ''
          .delete(``)
          .then( () => {
            axios
              // .get('http://localhost:3000') heroku goes here ''
              .get('')
              .then((response) => {
                setForms(response.data)
              })
          })
      }
    


    //use effects
    useEffect( () => {
        axios
        // .get('http://localhost:3000/') heroku goes here ''
        .get('')
        .then((response) => {
          setForms(response.data)
        })
      }, [])

    //return
    return(
    <main id="main-container">
        <section>
            <h2>Add your fav places</h2>
            <form onSubmit={handleNewFormsSubmit}>
                <div className="form-details">
                 Title: <input name="title" type="text" onChange={handleNewTitleChange}/><br />
                 Image URL: <input name="image" type="text" onChange={handleNewImageChange}/><br />
                Location: <input name="location" type="text" onChange={handleNewLocationChange}/><br />
                Decription: <input name="description" type="text" onChange={handleNewDescriptionChange}/><br />
                </div>
            <input id="post-submit" type="submit" value="SUBMIT POST"/>
             </form>
        
    </section>
        <h2>forms</h2>
        <ul className="">
        {
            Forms.map((forms) => {
                return <li key={forms._id}>
                <h3 className="form-title">{forms.title}</h3>
                <img className="form-img" src={forms.image}/>
                <details>
                    <div className="form-details">
                    <h3>Location: {forms.location}</h3>
                    <h3>description: {forms.description}</h3> 
                    </div>
                    <details>
                    <header>edit form</header>
                    <div className="edit-container">
                        <form className="edit-form" onSubmit={ e => {
                            e.preventDefault()
                            handleUpdateForms(forms) }}>
                            <div className="form-details">
                                Title: <input name="title" type="text" onChange={handleUpdateTitle}/><br />
                                Image URL: <input name="image" type="text" onChange={handleUpdateImage}/><br />
                                Location: <input name="location" type="text" onChange={handleUpdateLocation}/><br />
                                Decription: <input name="description" type="text" onChange={handleUpdateDescription}/><br />
                            </div>
                            <div className="edit-delete">
                                <input type="submit" value="SUBMIT EDITS"/>
                                <button onClick={ e => {
                                    e.preventDefault()
                                    handleDelete(forms) }}
                                    >DELETE POST</button>
                            </div>
                        
                        </form>
                    
                    </div>
                    
                    </details>
                </details>
            
                
                </li>
            })
        }
        
        </ul>
</main>
        
        

        //form array .map
        //edit
        //delete
    )



}

export default Forms