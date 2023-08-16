import React from "react";
//import { BrowserRouter, Route, Routes, Router} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./pages/Home";
import Footer from "./container/Footer";
import Header from "./container/Header";
import HomeContenair from "./pages/HomeContenair";

function App() {
  return (
    <>
          <Header/>
          <Home />
            <main>
              <Container > 
               <HomeContenair />
              </Container>
            </main>
          <Footer />
    </>
  );
}

export default App;
/**
 *  <BrowserRouter>
         <NavBar/>
         <Routes>
           <Route></Route>
         </Routes>
       </BrowserRouter>
 */