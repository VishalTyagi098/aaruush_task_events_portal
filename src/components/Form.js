import { useState } from 'react';
import './Form.css'

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [event, setEvent] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the event change
const handleEvent = (e) => {
	setEvent(e.target.value);
	setSubmitted(false);
};


// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || event === '') {
	
	} else {
	setSubmitted(true);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

return (
	<div className="form">
    <div className="form-contain">
      <div>
      <h1>User Registration</h1>
    </div>

    {/* Calling to the methods */}
    <div className="messages">
      {successMessage()}
    </div>

    <form>
      {/* Labels and inputs for form data */}
      <label className="label">Name</label>
      <input onChange={handleName} className="input"
      value={name} type="text" />

      <label className="label">Email</label>
      <input onChange={handleEmail} className="input"
      value={email} type="email" />

      <label className="label">Event Name</label>
      <input onChange={handleEvent} className="input"
      value={event} type="text" />

      <button onClick={handleSubmit} className="btn" type="submit">
      Submit
      </button>
    </form>
    </div>
	
	</div>
);
}
