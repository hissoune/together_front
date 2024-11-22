import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/auth/Register'
import './index.css'
import Login from './components/auth/Login'
import DashboardHub from './pages/Dashboard'
import ManagePage from './pages/ManagePage'
import CreatePage from './pages/CreatePage'
import StartRoom from './pages/StartRoom'
import WatchRoom from './pages/WatchRoom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/Dashboard' element={<DashboardHub/>}/>
     <Route path="/manage" element={<ManagePage />} />
     <Route path="/create" element={<CreatePage />} />
     <Route path="/start-room" element={<StartRoom />} />
     <Route path="/WatchRoom" element={<WatchRoom />} />


     
   
     

    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
