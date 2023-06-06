import './App.css';
import AppNavbar from "./components/AppNavbar";
import Banner from "./components/HomeBanner"
import Landing from "./components/Landing"
import Deal from "./components/PromosAndDeals"
import BestProduct from "./components/BestProduct"
import ProductsCarousel from "./components/ProductsCarousel"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Register from "./pages/Register"
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import AllProducts from './pages/AllProducts';
import CheckOut from './pages/Checkout';
// import ArchivedProducts from './pages/ArchivedProducts';
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react"
import { UserProvider } from "./UserContext"


function App() {

  // Creating a user state for global scope


  const [user, setUser] = useState({
      id: localStorage.getItem("id"),
      isAdmin: localStorage.getItem("isAdmin"),
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token")
  })

  
  // Function for clearing the storage on logout
  const unsetUser = () => {
    localStorage.clear();
  }

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])



  return (
    
    <UserProvider value ={{ user, setUser, unsetUser }}>
      <Router>
          <AppNavbar/>
            <Container fluid className="p-0 m-0">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/products/allItems" element={<AllProducts/>}/>
                <Route path="/products/buy/:productId" element={<CheckOut />} />

                {/*<Route path="/products/archivedProducts" element={<ArchivedProducts/>}/>*/}
                {/*<Route path="*" element={<Error/>}/>*/}
              </Routes>
            </Container>

      </Router>

    </UserProvider>

   
  );
}

export default App;


 // <UserProvider value={{user, setUser, unsetUser}}>
    //   <Router>
    //     <AppNavbar/>
    //       <Container>
    //           <Routes>
    //               <Route path="/" element={<Home/>}/>
    //               <Route path="/courses" element={<Courses/>}/>
    //               <Route path="/courseView/:courseId" element={<CourseView/>}/>
    //               <Route path="/login" element={<Login/>}/>
    //               <Route path="/logout" element={<Logout/>}/>
    //               <Route path="*" element={<Error/>}/>
    //           </Routes>
    //       </Container>
    //   </Router>
    // </UserProvider>