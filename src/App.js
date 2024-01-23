
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import HomePage from './pages/homePage'
import ChatsPage from './pages/chatsPage'
import ChatPage from './pages/ChatPage'
import { ArticlePage } from './pages/articlePage'

import './App.css'
import { ErrorPage } from './pages/ErrorPage'
import { LoginPage } from './pages/LoginPage'
import Logo from './Images/Logo.jpg'

function App() {
  const cash = useSelector(store => Number(store.reducerLogin.cash))
  return (
    <div className='app'>
      <BrowserRouter >
        <header>
          <div className='leftHeader'>
            <Link to="/" className="logo"><img className="logo" alt="logo" src={Logo}></img></Link>
          </div>
          <ul>
            <Link to="/" >Home</Link>
            <Link to="/chats" >Chats</Link>
            <Link to="/articles">Articles</Link>
          </ul>
          <div className='rightHeader'>
            <Link to="login" >{cash ? cash : <AssignmentIndIcon />}</Link>
            <Link to='#'>
              Registration
            </Link>
          </div>
        </header>
        <Routes>
          <Route path='/' exact >
            <Route index element={<HomePage />} />
            <Route path='chats'>
              <Route index element={<ChatsPage />} />
              <Route path=':chatId?' exact element={<ChatPage />} />
            </Route>
            <Route path='login' element={<LoginPage />}></Route>
          </Route>
          <Route path='/articles' element={<ArticlePage />}></Route>
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Outlet></Outlet>
      </BrowserRouter>
    </div>
  )
}

export default App;
