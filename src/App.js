import { Route, Routes, useNavigate } from 'react-router-dom'; 
import "antd/dist/reset.css"; 
import './App.css';
import { Menu } from 'antd';
import { FolderFilled } from "@ant-design/icons/lib/icons";
import { HiSearch } from "react-icons/hi";
import Films from './components/Films';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles  from './components/Vehicles';




function App() {
  
  return (
   <div>
    <Header/>
    <div>
      <SideMenu/>
    </div>
   </div>
   
  );
}

function Header(){
  const navigate = useNavigate();
  const homeclick=()=>{
    navigate('/');
  }
  return(
    <div className='header'>
    <div style={{margin:'1rem', paddingLeft:'15px'}}>
      <img src='https://sguru.org/wp-content/uploads/2018/02/star_wars_logo_PNG27.png' onClick={()=>homeclick()} height={40} width={80} />
    </div >
    <div className='search'>
      <span><HiSearch size={20}/></span> <input 
   type="text"
   placeholder="Search here"
    /></div>
    
        
  </div>
  );
}

function Main(){
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/films" element={<Films/>}></Route>
      <Route path="/people" element={<People/>}></Route>
      <Route path="/planets" element={<Planets/>}></Route>
      <Route path="/species" element={<Species/>}></Route>
      <Route path="/starships" element={<Starships/>}></Route>
      <Route path="/vehicles" element={<Vehicles/>}></Route>
    </Routes>
  </div>
  );
}

function SideMenu(){
  const navigate = useNavigate();
  return (
    <div className="App" style={{display:'flex', flexDirection:'row', }}>
     
    <Menu
    onClick={({key}) => {
      navigate(key);
    }}
    items={[
      {label : "Films", key:"/films", icon:<FolderFilled style={{ fontSize: '15px', color: 'whitesmoke', }}/> },
      {label : "People", key:"/people", icon:<FolderFilled style={{ fontSize: '20px', color: 'whitesmoke' }}/>},
      {label : "Planets", key:"/planets", icon:<FolderFilled style={{ fontSize: '20px', color: 'whitesmoke' }}/>},
      {label : "Species", key:"/species", icon:<FolderFilled style={{ fontSize: '20px', color: 'whitesmoke' }}/>},
      {label : "Starships", key:"/starships", icon:<FolderFilled style={{ fontSize: '20px', color: 'whitesmoke' }}/>},
      {label : "Vehicles", key:"/vehicles", icon:<FolderFilled style={{ fontSize: '20px', color: 'whitesmoke' }}/>},

    ]}
     style={{padding:'20px', backgroundColor:'#002147', color:'white', fontSize:'15px', width:'260px' }}>

     </Menu>
    <Main />
  </div>

  );
}



export default App;
