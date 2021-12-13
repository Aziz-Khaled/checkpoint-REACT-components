import logo from './logo.svg';
import './App.css';
import Adress from './components/Profile/adress' ; 
import FullName from './components/Profile/fullName' ;
import Introduction from './components/Profile/introduction' ;
import hiver from './autumn-background.jpg' ;
import ProfilePhotos from './components/Profile/ProfilePhotos';
import Facebook from './facebook.png' ;
import Github from './github.png' ;
import Youtube from './youtube.png' ;


function App() {
  return (
    
    <div className = "container">
      <div className = " card ">
      <div className =" card background">
      <img className='hiver ' src={hiver} alt ='ph'></img>
        <FullName/>
        <Adress />
        <Introduction/>
        <ProfilePhotos/>
        
        
      </div>
      <div className='Social'>
      <a href='https://www.facebook.com/mouhamedaziz.khaled/'>
      <img className='facebook' src={Facebook} alt ='ph'></img>
      </a>
      <a href='https://www.youtube.com/'>
      <img  className='youtube' src={Youtube} alt ='ph'></img>
      </a>
      <a  href='https://github.com/'>
      <img className='Github' src={Github} alt ='ph'></img>
      </a>
      </div>

    </div>
    </div>
    
  );
}

export default App;
