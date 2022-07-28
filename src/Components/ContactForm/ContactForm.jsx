import React, {useState} from 'react'

const ContactForm = ({contacts, addContacts}) => {
    const initialValues = {full_name: "", phone_number: "" };
    const [form, setForm] = useState(initialValues);
    const onChangeInput = (e) => {
        setForm ({...form, [e.target.name]: [e.target.value]})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(form.full_name === "" || form.phone_number ===""){
            alert("Please Enter the Data...")
        }
        addContacts([...contacts, form])
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name="full_name" type="text" placeholder='Full Name' onChange={onChangeInput}/>
        </div>
        <div>
            <input type={"number"} name="Phone_number" placeholder='Phone Number' maxLength={"10"} minLength={"10"}/>
        </div>
        <div id="button">
            <button>Add</button>
        </div>
    </form>
  )
}

export default ContactForm