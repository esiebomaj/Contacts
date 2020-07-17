import React, { Component } from 'react';
import ListContact from './ListContacts';
import * as contactsAPI from './utils/ContactsAPI';
import CreateContact from './createContact'
import {Route} from 'react-router-dom'




class App extends Component {

  state={
    contacts:[],
    screen:'list'
  }

  componentDidMount(){
    contactsAPI.getAll().then((contacts)=>this.setState(()=>({contacts:contacts})))
  }

  updateContact=(contactId)=>{
    contactsAPI.remove(contactId)
    this.setState((prevState)=>(
    {contacts: prevState.contacts.filter((contact)=>{
      return contactId !== contact.id
    })}
    ))
    }
    
  CreateContact(contact){
    contactsAPI.create(contact).then((contact)=>{
      this.setState((prevState)=>({
        contacts:prevState.contacts.concat(contact)
      }))
    })
    }

  render() {
    return (
      
      <div>
        <Route exact path='/' render={()=>
          (<ListContact
          contacts={this.state.contacts} 
            updateContact={this.updateContact}
             />)
        }>
       </Route>

        <Route path='/create' render={(history)=>(
        <CreateContact
        onCreateContact={(contact)=>{
          this.CreateContact(contact)
          history.push('/')
        }}
        />)}>

        </Route>
        
      )

      </div>
    )
  }
}


export default App;
