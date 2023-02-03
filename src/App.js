// accessing DOM elements directly
import './App.css';
import {UseRef} from "./UseRef"
import {UseRefbutton} from "./UseRefbutton"
import {EventBubbling} from "./EventBubbling"
import {EventBubblingPC} from "./EventBubblingPC"
import {StopPropagation} from "./StopPropagation"

function App() {
  return (
    <div className="App">
      <UseRef></UseRef>
      <UseRefbutton></UseRefbutton>
      <EventBubbling></EventBubbling>
      <EventBubblingPC></EventBubblingPC>
      <StopPropagation></StopPropagation>
     
    </div>
  );
}

export default App;
