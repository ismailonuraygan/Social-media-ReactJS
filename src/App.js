import './App.css';
import Feed from './Feed';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

function App() {
  return (
    
    <div className="App">
      <LeftSideBar />
      <Feed />
      <RightSideBar/>
    </div>

  );
}

export default App;
