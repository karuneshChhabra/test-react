import './App.css';
import React,{useEffect,useCallback,useState} from 'react';

//Counter program

const interval = (delay) => callback =>{

  useEffect(() => {
    let id  = setInterval(callback, delay);
    
    return () => {
      clearInterval(id);
    }
  }, [callback])
}


const timer = interval(1000);

const useTimer = ({running:initialRunningState=false,seconds:initialSeconds=0} ={}) =>{
  //{}
  // eslint-disable-next-line no-unused-vars
  const [seconds, setSeconds] = useState(initialSeconds);

  const [running, setRunning] = useState(initialRunningState);


  const func= useCallback(()=>{
    // eslint-disable-next-line no-unused-expressions
    running ? setSeconds(seconds => seconds+1):undefined;
  },[running]);


  const start =()=>{
    setRunning(true);
   
  };

  const stop =()=>{
    setRunning(false);
    setSeconds(0);

  };

  const pause =()=>{
    setRunning(false);
  };

  const resume =()=>{
    setRunning(true);
  };

  timer(func);

  return [start,stop,pause,resume,running,seconds];

}



function App() {

  const [start,stop,pause,resume,running,seconds] = useTimer();
  return ( 
    <div className="App">
      <span>Timer {seconds}</span>
      <br/>
      {!running && seconds===0 && <button onClick={start} >Start</button>}
      {running && <button onClick={pause} >Pause</button>}
      {!running && seconds>0 &&  <button onClick={resume} >Resume</button>}
      {running && <button onClick={stop} >Stop</button>}
     
            
    </div>
  );

}

export default App;
