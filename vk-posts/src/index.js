import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './front/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

function Main(){
  const [posts, setPosts] = useState([]);

  useEffect( () => {

    const getPosts = async () => {
    const res = await axios.get("http://localhost:8080")
    setPosts(res.data)
    }

    getPosts()
  }, [])

  return(
  <React.StrictMode>
    <App posts = {posts}/>
  </React.StrictMode>
  )
}
  ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

