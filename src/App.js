
import './App.css';
import ScreenLoader from './component/screenLoader';
import { useAuthContext } from './context/AuthContext';
import Index from './pages/Routes';

function App() {



    const {isAppLoading} = useAuthContext()
    // console.log("isAuthenticated",isAuthenticated);
    // console.log("isAdmin",isAdmin);
    
  return (
<>

{!isAppLoading ?
     <Index/>  :<ScreenLoader/> }
    </>
  );
}

export default App;
