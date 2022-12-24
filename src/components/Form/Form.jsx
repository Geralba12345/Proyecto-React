import {useState} from 'react'




const Form = () => {

    const [userData, setUserData ] = useState ({name:"", surname:""})





    const handleSubmit = (event)=>{

        event.preventDefault()
    }



    


    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" name="name" onChange={(event)=> setUserData ({...userData, name:event.target.value})} value={userData.name}/>
            <input type="text" placeholder="Ingrese su apellido" name="surname" onChange={(event)=> setUserData ({...userData, surname:event.target.value})} value={userData.surname} />
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Form
