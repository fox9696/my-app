
import './App.css';
import Noname from './Noname';


function App() {

  const $h2 = <h2>반가워요~~</h2>; 

  return  (
    <>
    <Noname/>
   <div className='App'>
        <h1>메롱메롱</h1>
        {$h2}
   </div>
   <div className='noname'>
         <input type='text' /> 
          <p>
            오늘은 5월1일 수요일입니다 . <br />
            오후 3시 30분 입니다.
         </p>
        </div>
   </>
  );
}

export default App;
