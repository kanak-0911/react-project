import Jsx , {Greet} from "./Containers/jsx";
import Databinding from "./Containers/Databinding";
import Users from './Containers/Users';
import {Routes, NavLink, Route} from 'react-router-dom';

function App(){
  return (
    <div>
      <Routes>
        <Route path= "/" element = {<Jsx/>}></Route>
        <Route path= "/binding" element = {<Databinding/>}></Route>
        <Route path= "/Users" element = {<Users/>}></Route>
      </Routes>
    </div>
  )
}

export default App; 