import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Intoro from '../components/intoro'
import Hero from '../components/hero'


import * as styles from '../styles/contact.module.scss'

export default function FormPage() {
const [value, setValue] = React.useState({})
const [serverResponse, setServerResponse] = React.useState('')

function handleChange(e) {
value[e.target.id] = e.target.value
setServerResponse('')
setValue({ ...value })
}

async function onSubmit(e) {
e.preventDefault()
const response = await window
	.fetch('/api/form', {
	method: 'POST',
	headers: {
		"content-type": "application/json",
	},
	body: JSON.stringify(value),
	})
	.then(res => res.json())
setServerResponse(response)
}

return (
<Layout>
<Seo title="Contact" />
<Intoro />

<article className={styles.article}>


<h1>Conatct</h1>
<div>
	<h2>Server response</h2>
	<p>{serverResponse}</p>
</div>
<hr />
<form onSubmit={onSubmit} method="POST" action="/api/form" className="formWrapper">
	<h2>Contact Form</h2>
	<div className="formBlock">
	<label>
		<span>Email</span>
		<input
		type="email"
		name="email"
		id="email"
		value={value['email'] || ``}
		onChange={handleChange} />
	</label>
	</div>
	<div className="formBlock">
	<label>
		<span>Subject</span>
		<textarea
		name="emailBody"
		id="emailBody"
		value={value['emailBody'] || ''}
		onChange={handleChange} />
	</label>
	</div>
	<div className="formBlock">
	<input type="submit" />
	</div>
	<div className="formBlock">
	<input type="reset" value="Clear" />
	</div>
</form>
</article>

</Layout>
)}