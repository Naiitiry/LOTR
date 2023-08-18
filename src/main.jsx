import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <App />
)
