import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import AdminHome from './component/screen/adminHome';
import NewOrders from './component/screen/newOrders';
import AcceptedOrders from './component/screen/acceptedOrders';
import RejectedOrders from './component/screen/rejectedOrders';
import AddItems from './component/screen/addItems';
import AddAreas from './component/screen/addAreas';
import Navebar from './component/navebar';



function App() {
  return (
    <>
    

      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/Add_Items" element={<AddItems />} />
        <Route path="/New_Orders" element={ <NewOrders />} />
        <Route path="/Accepted_Orders" element={ <AcceptedOrders />} />
        <Route path="/Rejected_Orders" element={ <RejectedOrders />} />
        <Route  path="/addAreas" element={<AddAreas />} />

      
      </Routes> 
      
     
    </>
  );
}

export default App;
