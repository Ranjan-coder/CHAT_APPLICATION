import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Chat from './pages/chat/Chat'
import Profile from './pages/profile/Profile'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Auth/>} />
      <Route path='/chat' element={<Chat/>} />
      <Route path='/profile' element={<Profile/>} />

      {/* this route will helps to navigate to the auth route if the user type anything in the url if that route doesnot define */}
      <Route path='*' element={<Navigate to='/' /> } />
    </Routes>

    </>
  )
}

export default App
