import React, {useState} from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'

const Contact = () => {
    const [contacts, setContacts] = useState([
        {full_name: "ABC", phone_number: "123456"},
        {full_name: "BCD", phone_number: "567890"},
        {full_name: "CDE", phone_number: "654321"},
    ]);
  return (
    <div id="container">
        <div id="box">
            <ContactList contacts={contacts}/>
            <ContactForm contacts={contacts} addContacts={setContacts}/>
        </div>
    </div>
  )
}

export default Contact