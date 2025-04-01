import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'; // Import BrowserRouter
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Profile from './component/Profile';
import UserList from './component/Userlist';
import User from './component/user'; // Fixed casing for consistency

const App = () => {
  let navigate = useNavigate();

  function displayUserList() {
    navigate('/userlist');
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/userlist" element={<UserList />}>
          <Route path=":id" element={<User username="User 1" email="user1@example.com" />} /> {/* Example for User 1 */}
        </Route>
      </Routes>
      <button onClick={displayUserList}>UserList</button>
    </div>
  );
};

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;