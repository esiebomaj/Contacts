import React from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'


class CreateContact extends React.Component {
    handleSubmit(e){
        e.preventDefault()
        const values =serializeForm(e.target,  {hash:true})
        console.log(this.state)
        
    }
    render(){
        return (
            <div>
                <Link to='/' className='close-create-contact'>close</Link>
                <form onSubmit={this.handleSubmit} className='create-contact-form'>
                    <ImageInput className='create-contact-avatar-input'
                    name='avatarURL'
                    maxHeight={64}></ImageInput>
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='name'></input>
                        <input type='text' name='handle' placeholder='Handle'></input>
                        <button>Add contact</button>
                    </div>
                </form>
            </div>
           
            
            )
    }
        
    
} 
export default CreateContact