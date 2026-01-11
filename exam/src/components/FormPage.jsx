import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormPage() {
  const [form, setForm] = useState({ name: '', email: '', age: '', gender: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name) err.name = 'Name required'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) err.email = 'Valid email required'
    if (!form.age || form.age < 1 || form.age > 120) err.age = 'Age 1-120'
    if (!form.gender) err.gender = 'Select gender'
    if (!form.message || form.message.length < 10) err.message = 'Message min 10 chars'

    if (Object.keys(err).length === 0) {
      setSuccess(true)
      setErrors({})
      console.log('Form Data:', form)
    } else {
      setErrors(err)
      setSuccess(false)
    }
  }

  return (
    <div className="container">
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" onChange={handleChange} />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Age</label>
          <input name="age" type="number" onChange={handleChange} />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="3" onChange={handleChange} />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <button type="submit">Submit</button>
        {success && <div className="success">Form submitted successfully!</div>}
      </form>
      <button className="link-btn" onClick={() => navigate('/main')}>Back</button>
    </div>
  )
}

export default FormPage