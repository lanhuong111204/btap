import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Overview from "./components/Overview.jsx";
import Table from "./components/Table.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from "./pages/Projects.jsx";
import Analytics from "./pages/Analytics.jsx";
import Messages from "./pages/Messages.jsx";
import Teams from "./pages/Teams.jsx";
import Integrations from "./pages/Integrations.jsx";



export default function App() {
  return (
    <BrowserRouter>
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <Routes>
            {/* Route mặc định khi tải trang */}
            <Route path="/" element={
              <>
              <Overview/>
              <Table/>
             </>
             } />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/teams" element={<Teams/>} />
            <Route path="/integrations" element={<Integrations/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    
  )
}
    
    
      
 

