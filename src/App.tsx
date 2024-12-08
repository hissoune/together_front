import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/auth/Register'
import './index.css'
import Login from './components/auth/Login'
import DashboardHub from './pages/Dashboard'
import ManagePage from './pages/ManagePage'
import StartRoom from './pages/StartRoom'
import WatchRoom from './pages/WatchRoom'
import PlaylistPage from './pages/PlaylistPage'
import ProtectedRoute from './helpers/ProtectedRoute'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<ProtectedRoute type='public' role={null}><Register/></ProtectedRoute> }/>
     <Route path='/login' element={<ProtectedRoute type='public' role={null}><Login/></ProtectedRoute>}/>
     <Route path='/Dashboard' element={<DashboardHub/>}/>
     <Route path="/manage" element={<ManagePage />} />
     <Route path="/playlists" element={<PlaylistPage />} />
     <Route path="/start-room" element={<StartRoom />} />
     <Route path="/WatchRoom" element={<WatchRoom />} />


     
   
     

    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
