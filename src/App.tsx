import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./Context/DataContext";
import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import Resume from "./pages/Resume";
import { Sells } from "./pages/Sells";
import "./style.css";
import { Sell } from "./pages/Sell";
import { Loading } from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
            <Route path="/" element={<Resume />} />
              <Route path="/vendas" element={<Sells />} />
              <Route path="/vendas/:id" element={<Sell />} />
            </Routes>
            
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
