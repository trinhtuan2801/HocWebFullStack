import clsx from 'clsx';
import { useEffect, useState } from 'react';
import './App.css'
import Dropdown from './Dropdown/Dropdown';
import fetchData from './fetchData';
import MyButton from './MyButton/MyButton';

const colors = ['cornflowerblue', 'blueviolet', 'indianred', 'deeppink', 'forestgreen']

const tags = ['business', 'education', 'faith', 'famous-quotes', 'friendship', 'future', 'happiness', 'history', 'inspirational', 'life', 'literature', 'love', 'nature', 'politics', 'proverb', 'religion', 'science', 'success', 'technology', 'wisdom']

function App() {

  const [themeColor, setThemeColor] = useState('cornflowerblue')
  const [searchTags, setSearchTags] = useState([])
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const fetchQuote = async (tags = []) => {
    let url = 'https://api.quotable.io/random'
    if (tags.length !== 0) url += '?tags=' + tags.join(',')
    let response = await fetchData(url)
    if (response.status === 200) {
      let data = await response.json()
      setQuote(data.content)
      setAuthor(data.author)
    }
    else {
      setQuote('No quotes match :(')
      setAuthor('')      
    }
  }

  useEffect(() => {
    fetchQuote(searchTags)
  }, [searchTags])

  const onClickSearchTag = (tag) => (event) => {
    let arr = searchTags.filter((curr) => curr)
    let index = arr.findIndex(cur => cur === tag)
    if (index === -1) {
      arr.push(tag)
    }
    else {
      arr.splice(index, 1)
    }

    setSearchTags(arr)
  }

  return (
    <div className="App" style={{ backgroundColor: themeColor }}>
      <div className="Header">Random Quote Machine</div>
      <div className='Quote-box'>
        <div className="Quote-content" style={{ color: themeColor }}>
          {quote}
        </div>
        <div className="Quote-author" style={{ color: themeColor }}>- {author}</div>
        <div className="Quote-action">
          <button className="Quote-new-btn" style={{ backgroundColor: themeColor }}>
            New Quote
          </button>
        </div>
      </div>
      <div className="Color-box">
        {colors.map((color, index) => (
          <span
            key={index}
            className={clsx('Color-item', { 'active': color === themeColor })}
            style={{ background: color }}
            onClick={() => { setThemeColor(color) }}
          />
        ))}
      </div>
      <div className="Tag-box">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={clsx('Tag', { 'active': searchTags.includes(tag) })}
            onClick={onClickSearchTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 30, backgroundColor: 'white', padding: '20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <MyButton
          primary={true}
          label="MyButton"
          backgroundColor="cornflowerblue"
          size="medium"
        />

        <div style={{ marginTop: 20 }}></div>

        <Dropdown
          options={['Profile', 'Settings', 'Logout']}
        />
      </div>
    </div>

  );
}

export default App;
