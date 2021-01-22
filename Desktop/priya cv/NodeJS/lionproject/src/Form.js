import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [availability, setAvailability] = useState('');

    const [flexiable, setFlexiable] = useState(false);

    const onChangeName = (e) => {

        setName(e.target.value)
        console.log("name", name)
    }

    const onChangeEmail = (e) => {

        setEmail(e.target.value)
        console.log("email", email)
    }

    const onChangeAvailability = (e) => {

        setAvailability(e.target.value)
        console.log("availability", availability)
    }

    const onChangeFlexiable = (e) => {

        setFlexiable(e.target.value)
        console.log("flexiablee", flexiable)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const avaiRegx = /^[0-9.\-/]+$/

        if(name==='')
        {
            document.getElementById("name-error").innerHTML="Mandatory filed";
          
        }
        else if(name.length >100)
        {
             document.getElementById("name-error").innerHTML="Length should be less than 100 characters";

         }

         else if(availability && !availability.match(avaiRegx))
         {
             document.getElementById("avai-error").innerHTML = "It should be Number in range";
         }
         else if (email && !email.match(emailRegx))
         {
             document.getElementById("email-error").innerHTML ="emailid should have @ and dot format";
         }
         else
          {
              window.alert("saved the form");
              setName('')
              setEmail('')
              setFlexiable(false)
              setAvailability('')
              window.location.reload()
            }
            
          
         
        }


    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form  onSubmit={onSubmit}  id='form'>
                <div className='form-group'>
                    <label>Full Name</label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChangeName}
                    />
                    <span id='name-error' className='text-danger'></span>

                </div>

                <div className='form-group'>
                    <label>Email Address</label>
                    <input
                        id='email'
                        type='text'
                        name='email'
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <span id='email-error' className='text-danger'></span>

                </div>

                <div className='form-group'>
                    <label>Availability</label>
                    <input
                        id='availability'
                        type='text'
                        name='availability'
                        value={availability}
                        onChange={onChangeAvailability}
                    />
                    <span id='avai-error' className='text-danger'></span>
                </div>

                <div className='form-group'>
                    <input type="checkbox" id='flexiable' name='flexiable' value={flexiable} onChange={onChangeFlexiable} />
                    <label>Flexiable</label><br></br>
                </div>

                <input
                    type='submit'
                    value='Register'
                    id='button'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    )
}

export default Form 