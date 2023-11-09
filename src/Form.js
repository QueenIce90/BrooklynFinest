import { useState } from "react"

function Form ({brooklyn, setBrooklyn}){

    const [formtext, setFormtext] = useState({})


    function updateFormData (e) {
        const {name, value} = e.target
        setFormtext({...formtext, [name]: value})
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:8880/Brooklyn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formtext)
        })
        .then(r => r.json())
        .then(updated => {
            setBrooklyn([...brooklyn, updated])
        })
    }

    return (
        <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Name" />
        <input onChange={updateFormData} type="text" name="location" placeholder="Location" />
        <input onChange={updateFormData} type="text" name="activites" placeholder="Activities"/>
        <input onChange={updateFormData} type="text" name="image" placeholder="Location Image" />
        <input onChange={updateFormData} type="text" name="activityimage" placeholder="Activities Image" />
        <input onChange={updateFormData} type="text" name="Hours" placeholder="Hours"/>
        <input onChange={updateFormData} type="submit" value="Add"/>
    </form>
    )
}


export default Form