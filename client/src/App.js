import React from "react";
import Wrapper from "./views/Wrapper";
import { ToastProvider } from "react-toast-notifications";
const App = () => {
  return (
    <ToastProvider>
      <Wrapper />
    </ToastProvider>
  );
};
export default App;
