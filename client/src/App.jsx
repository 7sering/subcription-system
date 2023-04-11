import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthRoute from "./components/routes/AuthRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";
import StripeSuccess from "./pages/StripeSuccess";
import StripeCancel from "./pages/StripeCancel";

function App() {
  return (
    <>
      <Navbar />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* Protected Route Only for logged in user  */}
        <Route element={<AuthRoute />}>
          <Route exact path="/stripe/success" element={<StripeSuccess />} />
          <Route exact path="/stripe/cancel" element={<StripeCancel />} />
        </Route>
        {/* Protected Route Only for logged in user  */}
      </Routes>
    </>
  );
}

export default App;
