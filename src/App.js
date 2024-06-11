import { useState } from 'react';
import './App.css';
import { Context } from './context/Context';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">
        <Context.Provider value={{user, setUser}}>
          <AppRouter />
        </Context.Provider>
    </div>
  );
}

export default App;