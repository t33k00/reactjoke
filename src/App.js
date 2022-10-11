import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

const URL = 'http://api.jokes.one/jod'
function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
 
  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      console.log(response)
      const joke = response.data.contents.jokes[0].joke
      setTitle(joke.title)
      setText(joke.text)

    }). catch(error=>{
      console.log(error)
      alert("retrieving joke failed")
    })

  }, [])

  

  return (
    <div>
      <h3>Joke of the day</h3>
      <h4>{title}</h4>
      <h4>{text}</h4>
    </div>
  );
}

export default App;
