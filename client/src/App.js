import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  return (
    <GoogleOAuthProvider clientId="447282309964-6c6d0ntq5a314iuj6b1utqaq09fll3lv.apps.googleusercontent.com" >
     
    <AccountProvider>
      <Messenger/>
    </AccountProvider>


    </GoogleOAuthProvider>
  );
}

export default App;
