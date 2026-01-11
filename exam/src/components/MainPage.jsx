import { useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h2>Main Page</h2>
      <p>Welcome! Login successful.</p>
      <button className="link-btn" onClick={() => navigate('/form')}>Go to Form</button>
      <button onClick={() => navigate('/login')}>Logout</button>
    </div>
  )
}

export default MainPage