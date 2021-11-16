import './App.css';

import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import AdminNotifications from './Components/Admin-notifications/Admin-notifications'

const initialState= {
  route: 'home',
  isSignedIn: false
}

function App() {
  return (
    <div>
      <Nav/>
      <AdminNotifications/>
    </div>
  );
}

export default App;
