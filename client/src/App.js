import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="px-24 py-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
