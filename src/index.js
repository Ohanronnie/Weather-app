import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Bootstrap CSS
import App from './App';
export default function Note(){
	return(
	<>
	 <App/>
        </>
	)
}
ReactDOM.render(
  <React.StrictMode>

    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);
