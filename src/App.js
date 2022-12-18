import User from "./Components/Form/Index";
import UserData from "./Components/DataUser/Index";
import EditUser from "./Components/EditUser/index";

import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ToastProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<User />} />

            <Route path="/userdata" element={<UserData />} />
            <Route path="/edit_user/:id" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </>
  );
}

export default App;
