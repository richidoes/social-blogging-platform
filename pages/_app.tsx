import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { userContext } from "../lib/context";
import { UseUserData } from "../lib/hooks";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const userData = UseUserData();

  return (
    <userContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </userContext.Provider>
  );
}

export default MyApp;
