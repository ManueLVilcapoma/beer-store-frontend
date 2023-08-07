
import Layout from "./Componentes/UI/Layout";
import NavBar from "./Componentes/UI/NavBar";
import {Routes,Route,Navigate} from  'react-router-dom';

//Pages

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import NoFound from "./Pages/NoFound";
import Products from "./Pages/Products";
function App() {
  return (
     <div className="min-h-screen">
      <NavBar>     </NavBar>
        <Layout>

            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signin" element={<Signin></Signin>}></Route>
              <Route path="*" element={<NoFound></NoFound>}></Route>
              <Route path="/products/:id" element={<Products></Products>}></Route>
              {/* <Route path="*" element={<Navigate to="/"></Navigate>}></Route> */}
            </Routes>     
            
            
            
        </Layout>
 
      

      
     </div>
  );
}

export default App;
