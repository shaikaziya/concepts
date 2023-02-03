// accessing DOM elements directly
import './App.css';
import {UseRef} from "./components/UseRef"
import {UseRefbutton} from "./components/UseRefbutton"
import {EventBubbling} from "./components/EventBubbling"
import {EventBubblingPC} from "./components/EventBubblingPC"
import {StopPropagation} from "./components/StopPropagation"
import{Counter,HigherOrderC} from "./components//HigherOrderC"
import {WithOutUseMemo} from "./components/UseMemoHook/WithOut useMemo/WithOutUseMemo"
import {WithuseMemo} from "./components/UseMemoHook/With Usememo/WithuseMemo"
// import Callbackhook from "./components/UseCallbackHook/WithOut useCallback/Callbackhook"
import Callbackhook from "./components/UseCallbackHook/With UseCallback/Callbackhook"
function App() {
  return (
    <div className="App">
      {/* <UseRef></UseRef> */}
      {/* <UseRefbutton></UseRefbutton>  */}
      {/* <EventBubbling></EventBubbling> */}
      {/* <EventBubblingPC></EventBubblingPC> */}
      {/* <StopPropagation></StopPropagation> */}
      {/* <HigherOrderC cmp={Counter}></HigherOrderC> */}
      {/* <WithOutUseMemo></WithOutUseMemo> */}
      {/* <WithuseMemo></WithuseMemo> */}
      <Callbackhook></Callbackhook>
   
     

    </div>
  );
}

export default App;
