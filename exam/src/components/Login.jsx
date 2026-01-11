import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.username || form.username.length < 3) err.username = 'Username min 3 chars'
    if (!form.password || form.password.length < 6) err.password = 'Password min 6 chars'

    if (Object.keys(err).length === 0) navigate('/main')
    else setErrors(err)
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input onChange={(e) => setForm({...form, username: e.target.value})} />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" onChange={(e) => setForm({...form, password: e.target.value})} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login