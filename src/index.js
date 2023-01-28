import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Bootstrap CSS
import App from './App';
export default function Note(){
	return(
	<>
	 <App/>
         <div id="container-901e95f448a677e0972cc42c2146c468"></div> 
        </>
	)
}
ReactDOM.render(
  <React.StrictMode>

    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);
