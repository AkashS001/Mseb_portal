import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";
import Form_Phase1 from "./Components/Form_Phase1";
import HtForm from "./Components/HtForm"
function App() {
  const theme={
    colors : {
      heading: "#ff0000",
      footer_bg:"#0a1435"
    },
    media: {
      mobile:"768px",
      tab:"998px"
    }
  }

  return (
  
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/Form_Phase1" element={<Form_Phase1/>}/>
          <Route path="/HtForm" element={<HtForm/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </ThemeProvider>

    
    
    
  );
}



export default App;