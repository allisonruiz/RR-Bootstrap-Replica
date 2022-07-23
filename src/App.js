import './App.css';
import MiddleBar from './components/MiddleBar';
import StoreListing from './components/StoreListing';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className='App'>
<TopBar></TopBar>
<MiddleBar></MiddleBar>
<StoreListing></StoreListing>
  </div>
  );
}

export default App;
