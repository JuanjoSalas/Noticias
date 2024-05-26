import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form.jsx";
import ListNews from "./components/ListNews/ListNews.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { GlobalProvider } from './context/GlobalState.jsx';


 
function App() {

  return (
    <BrowserRouter>
    <GlobalProvider>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/list" element={<ListNews/>}/>
    </Routes>
    <Footer/>
    </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
