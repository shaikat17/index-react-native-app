import { getCurrentUser } from "@/lib/appwrite";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log("🚀 ~ useEffect ~ error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoggedIn,
        user,
        setUser,
        isLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
