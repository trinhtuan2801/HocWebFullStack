import './App.css'
import Dropdown from './Dropdown/Dropdown';
import MyButton from './MyButton/MyButton';

const colors = ['cornflowerblue', 'blueviolet', 'indianred', 'deeppink', 'forestgreen']

const tags = ['business', 'education', 'faith', 'famous-quotes', 'friendship', 'future', 'happiness', 'history', 'inspirational', 'life', 'literature', 'love', 'nature', 'politics', 'proverb', 'religion', 'science', 'success', 'technology', 'wisdom']

function App() {

  return (
    <div className="App">
      <div className="Header">Random Quote Machine</div>
      <div className='Quote-box'>
        <div className="Quote-content">
          It is the neglect of timely repair that makes rebuilding necessary.
        </div>
        <div className="Quote-author">- Richard Whately</div>
        <div className="Quote-action">
          <button className="Quote-new-btn">
            New Quote
          </button>
        </div>
      </div>
      <div className="Color-box">
        {colors.map((color, index) => (
          <span
            key={index}
            className={`Color-item ${index === 0 ? 'active' : ''}`}
            style={{ background: color }}
          />
        ))}
      </div>
      <div className="Tag-box">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`Tag ${index === 0 ? 'active' : ''}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 30, backgroundColor: 'white', padding: '20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <MyButton
          primary={false}
          label="MyButton"
          backgroundColor="#6495ED"
          size="large"
        />

        <div style={{ marginTop: 20}}></div>

        <Dropdown
          options={['Profile', 'Settings', 'Logout']}
        />
      </div>
    </div>

  );
}

export default App;
