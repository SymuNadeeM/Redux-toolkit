import './App.css';
import CounterView from './app/features/counter/CounterView';
import PostsView from './app/features/posts/PostsView';

function App() {
  return (
    <div className="App">
      <h1>Hello hon</h1>
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
