import './App.css';
import image from './imageInSrc.jpg';
import  './style.css';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">*/
      <div style={{border:"solid 1px black" , maxWidth:"100vw"}}>

        <h1 className='title red'>INES BS</h1>
<br/>
<img src={image} width={320} height={240} alt='dream'/>
<img src="/imageInPublic.jpg" width={320} height={240} alt='workhard' />
<br/>
<video width={320} height={240} controls>
<source src="myVideo.mp4" type="video/mp4"/ >
</video>
     </div> 
  );
}

export default App;
