
import Introduction from './components/introduction';
import Profile from './components/profile';
import MyButton from './components/myButton';

function App() {
  return (
    <div>
      <Profile />
      <h1>Sesi 1</h1>
      <Introduction name="gamiat sugani"/>
      <Introduction name="ainaya alfa tima"/>
      <MyButton/>
    </div>
  );
}

export default App;
