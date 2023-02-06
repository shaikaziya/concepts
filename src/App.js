// accessing DOM elements directly
import './App.css';


import {EventBubbling} from "./components/EventBubbling"
import {EventBubblingPC} from "./components/EventBubblingPC"
import {StopPropagation} from "./components/StopPropagation"
import{Counter,HigherOrderC} from "./components//HigherOrderC"
import {WithOutUseMemo} from "./components/UseMemoHook/WithOut useMemo/WithOutUseMemo"
import {WithuseMemo} from "./components/UseMemoHook/With Usememo/WithuseMemo"
// import Callbackhook from "./components/UseCallbackHook/WithOut useCallback/Callbackhook"
import Callbackhook from "./components/UseCallbackHook/With UseCallback/Callbackhook"
import {WithoutuseRef} from "./components/UseRefHook/WithOutuseRef/WithoutuseRef"
import {UseRef} from "./components/UseRefHook/WithUseRefHook/UseRef"
import {UseRefbutton} from "./components/UseRefHook/WithUseRefHook/UseRefbutton"
function App() {
  return (
    <div className="App">
      <UseRef></UseRef>
      <UseRefbutton></UseRefbutton> 
      {/* <EventBubbling></EventBubbling> */}
      {/* <EventBubblingPC></EventBubblingPC> */}
      {/* <StopPropagation></StopPropagation> */}
      {/* <HigherOrderC cmp={Counter}></HigherOrderC> */}
      {/* <WithOutUseMemo></WithOutUseMemo> */}
      {/* <WithuseMemo></WithuseMemo> */}
      {/* <Callbackhook></Callbackhook> */}
      {/* <WithoutuseRef></WithoutuseRef> */}
   
     

    </div>
  );
}

export default App;
