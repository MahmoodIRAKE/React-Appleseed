import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Ex22 from './components/Ex2.2/2.2.jsx'
import Box1 from './components/Ex3.1/box1.jsx'
import Quiz from './components/Ex3.2.js/quiz.jsx';
import ButtonText from './components/4.1/4.1'
import Card from './components/4.2/4.2'
import  Card2 from './components/6.1/6.1'
import Increment from './components/7.1/7.1'
import ShowBox from './components/7.2/7.2';
function App() {
  
  return (
    <div className="App">
{/* <Card2 src="https://th-thumbnailer.cdn-si-edu.com/IzJ6U8XJZK3JCDkLIybv03GqaUQ=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/25/f0/25f08cff-0355-4001-86ad-28950a866af4/grandteton.jpg" 
      title="Mountain" text="This Is Amountain" 
      explore='https://en.wikipedia.org/wiki/Mountain' share='https://en.wikipedia.org/wiki/Mountain'/> */}

<Increment/>
  <ShowBox/>
    </div>
  );
}






ReactDOM.render(

    <App />

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
    /* <Card src="https://th-thumbnailer.cdn-si-edu.com/IzJ6U8XJZK3JCDkLIybv03GqaUQ=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/25/f0/25f08cff-0355-4001-86ad-28950a866af4/grandteton.jpg" 
      title="Mountain" text="This Is Amountain" 
      explore='https://en.wikipedia.org/wiki/Mountain' share='https://en.wikipedia.org/wiki/Mountain'/>
            <Card src="https://th-thumbnailer.cdn-si-edu.com/IzJ6U8XJZK3JCDkLIybv03GqaUQ=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/25/f0/25f08cff-0355-4001-86ad-28950a866af4/grandteton.jpg" 
      title="Mountain" text="This Is Amountain" 
      explore='https://en.wikipedia.org/wiki/Mountain' share='https://en.wikipedia.org/wiki/Mountain'/>
            <Card src="https://th-thumbnailer.cdn-si-edu.com/IzJ6U8XJZK3JCDkLIybv03GqaUQ=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/25/f0/25f08cff-0355-4001-86ad-28950a866af4/grandteton.jpg" 
      title="Mountain" text="This Is Amountain" 
      explore='https://en.wikipedia.org/wiki/Mountain' share='https://en.wikipedia.org/wiki/Mountain'/> */