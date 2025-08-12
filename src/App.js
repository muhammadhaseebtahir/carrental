
import './App.css';
import ScreenLoader from './component/screenLoader';
import { useAuthContext } from './context/AuthContext';
import Index from './pages/Routes';

function App() {



    const {isAuthenticated,isAdmin} = useAuthContext()
    console.log("isAuthenticated",isAuthenticated);
    console.log("isAdmin",isAdmin);
    
  return (
<>

{!isAuthenticated ?
     <Index/>  :<ScreenLoader/> }
    </>
  );
}

export default App;
