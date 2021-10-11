import './App.css';
import {Header} from './components'
import { TaskQueues } from './Layout';

function App() {
  return (
    <div className="App">
      <div className="App__layout">
      <Header />
      <div className="App__todo">
      <TaskQueues />
      </div>
      </div>
    </div>
  );
}

export default App;
