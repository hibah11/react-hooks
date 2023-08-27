import { useState } from 'react';
import Home from '../pages/Home';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);


  const signUp = () => {

    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    alert (`you have created a new account seccssfully 🎉 
now try to login`)
    setName('');
    setEmail('');
    setPassword(''); 
  };



  const login = () => {
    const user = users.find(user => user.name == name && user.email === email && user.password === password);
    if (user) {
      setLoggedIn(user);
    } else {
      alert('Some inputs are wong, please try again');
    }
  };


  
  const logout = () => {
    setLoggedIn(null);
    setName('');
    setEmail('');
    setPassword(''); 
  };

  return (
    
    <div>
      {loggedIn ? (
        <div>
          <div className = 'flex flex-row px-10 py-3 bg-blue-200 justify-between'>
          <img className = 'w-32 h-13' src = {logo}></img>
          <button className="font-black hover:underline  text-white px-3 rounded bg-[#FF00A6]" onClick={logout}>
            Logout
          </button>
          </div>
          <div>
                  <Home/>
                          </div>
        </div>
      

        
      ) : 
      
      (
        
        <div className = 'p-5 flex flex-col justify-center items-center h-screen gap-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
          <p className = 'text-white font-light text-4xl tracking-wide text-center'>Welcome to the seceret website join to see the surprise</p>
          <input className = 'text-white bg-slate-900 rounded w-1/3 h-10 px-3 shadow-2xl' type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
          <input className = 'text-white bg-slate-900 rounded w-1/3 h-10 px-3 shadow-2xl' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input className = 'text-white bg-slate-900 rounded w-1/3 h-10 px-3 shadow-2xl' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button className="text-white hover:underline rounded px-4 py-2 border-2 " onClick={signUp}>Sign Up</button>
          <button herf = '/' className=" text-white hover:underline rounded px-5 py-2 border-2" onClick={login}>Log In</button>
        </div>
      )}
    </div>

    
  );
};

export default Navbar;
