import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import MainApp from './MainApp';

ReactDOM.render( 
<>
<BrowserRouter>
{/* <App/> */}
<MainApp/>
</BrowserRouter>
</>
,
document.getElementById('root'))