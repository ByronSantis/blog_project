import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PostPage } from './components/pages/PostPage'
import { PostForm } from './components/pages/PostForm'
import { Navigation } from './components/Navigation'
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
     <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to="/posts" />} />
          <Route path='/posts' element={<PostPage />} />
          <Route path='/posts-create' element={<PostForm />} />
          <Route path='/posts/:id' element={<PostForm />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
