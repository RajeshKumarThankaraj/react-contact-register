import React, {useState} from 'react'

const ContactForm = ({contacts, addContacts}) => {
    const initialValues = {full_name: "", phone_number: "" };
    const [form, setForm] = useState(initialValues);
    const onChangeInput = (e) => {
        setForm ({...form, [e.target.name]: e.target.value })
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(form.full_name === "" || form.phone_number === ""){
            alert("Please Enter the Data...")
        }
        addContacts([...contacts, form]);
        setForm(initialValues);
    }
  return (
    <form onSubmit={onSubmitForm}>
        <div>
            <input name="full_name" type="text" placeholder='Full Name' onChange={onChangeInput} value={form.full_name}/>
        </div>
        <div>
            <input type="number" name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} maxLength="10"/>
        </div>
        <div id="button">
            <button>Add</button>
        </div>
    </form>
  )
}

export default ContactForm