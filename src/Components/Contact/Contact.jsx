import React, {useState} from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'

const Contact = () => {
    const [contacts, setContacts] = useState([
        {fullName: "ABC", phoneNumber: "123456"},
        {fullName: "BCD", phoneNumber: "567890"},
        {fullName: "CDE", phoneNumber: "654321"},
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