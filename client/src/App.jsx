// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home';
import { OurClients } from './components/Clients/OurClients/OurClients';
import { Menu } from './components/Products/Menu/Menu';
import { Gallery } from './components/Products/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';
import { ForUs } from './components/ForUs/ForUs';
import { Details } from './components/Products/Details/Details';
import { Login } from './components/User/Login/Login';
import { Register } from './components/User/Register/Register';
import { AuthProvider } from './contexts/authContex';
import { Logout } from './components/User/Logout/Logout';
import { CreateComment } from './components/Clients/CreateComment/CreateComment';
import { DetailsComment } from './components/Clients/DetailsComment/DetailsComment';
import { EditComment } from './components/Clients/EditComment/EditComment';
import { NotFound } from './components/NotFound/NotFound';
import { AuthGuard } from './components/Guards/AuthGuard';
import { GuestGuard } from './components/Guards/GuestGuard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ForgotPassword } from './components/User/Forgot-Password/Forgot-Password';





function App() {

  return (
    <ErrorBoundary>
    <AuthProvider>
        <Header />
      
      <main>
        <Routes>
			      <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<ForUs/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/comments' element={<OurClients/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/contact' element={<Contact/>}/>

            <Route element={<AuthGuard/>}>
                <Route path='/createComment' element={<CreateComment/>}/>
                <Route path='/comments/:commentId' element={<DetailsComment/>}/>
                <Route path='/comment/edit/:commentId' element={<EditComment/>}/>
                <Route path='/menu/:menuId/:cakeId' element={<Details/>}/>
            </Route>

            <Route element={<GuestGuard/>}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/forgotPassword' element={<ForgotPassword/>}/>
            </Route>
            
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
      
      <Footer />
    </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
