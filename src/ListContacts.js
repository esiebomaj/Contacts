import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListContact extends React.Component{

    static prototypes={
        contacts: propTypes.array.isRequired,
        updateContact: propTypes.func.isRequired
      }
    state={
        query:''
    }
    updateQuery=(query)=>{
        this.setState(()=>({query:query}))
        

    }
    render(){
        let showingContacts= this.state.query===''
        ?this.props.contacts
        :this.props.contacts.filter((contact)=>contact.name.toLowerCase().includes(this.state.query.toLocaleLowerCase()) )

        return (
            <div className='list-contacts'>
                <form className='list-contact-top'>
                    <input 
                    className='search-contacts'
                    type='text'
                     value={this.state.query}
                     onChange={(event)=>this.updateQuery(event.target.value)}
                     ></input>
                    <Link
                    to='/create'
                    className='add-contact'
                    >Add contact</Link>
                </form>
                {showingContacts.length!==this.props.contacts.length &&(
                    <div>showing {showingContacts.length} of {this.props.contacts.length} contacts </div>
                )}
                <ul className='contact-list'>
                
                {showingContacts.map((contact) =>(

                <li key={contact.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}>

                    </div>
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button 
                    className='contact-remove' 
                    onClick={() =>this.props.updateContact(contact.id)}>
                        remove
                    </button>
                </li>
                    ))}
            </ul>

            </div>
            
            )
        }
    }


export default ListContact