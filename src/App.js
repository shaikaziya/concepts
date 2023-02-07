// accessing DOM elements directly
import './App.css';
import { Routes, Route } from "react-router-dom";
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
import {UnControlled} from "./components/UnControlledComponent/UnControlled"
import {LoginForm} from "./components/UseLocationHook/LoginForm"
import {GetDetailsUser} from "./components/UseLocationHook/GetDetailsUser"
import {Controlled} from "./components/ControlledComponent/Controlled"
import {Parent} from "./components/LiftingStateUp/Parent-To-Child/Parent"
import {Parent1} from "./components/LiftingStateUp/ChildToParent/Parent"
function App() {
  return (
    <div className="App">
      {/* <UseRef></UseRef>
      <UseRefbutton></UseRefbutton>  */}
      {/* <EventBubbling></EventBubbling> */}
      {/* <EventBubblingPC></EventBubblingPC> */}
      {/* <StopPropagation></StopPropagation> */}
      {/* <HigherOrderC cmp={Counter}></HigherOrderC> */}
      {/* <WithOutUseMemo></WithOutUseMemo> */}
      {/* <WithuseMemo></WithuseMemo> */}
      {/* <Callbackhook></Callbackhook> */}
      {/* <WithoutuseRef></WithoutuseRef> */}
      {/* <UnControlled></UnControlled>
    */}

    {/* <Controlled></Controlled> */}
    {/* <Parent></Parent> */}
    <Parent1></Parent1>
     {/* For UseLocation Hook */}
      {/* <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/getdetailsuser" element={<GetDetailsUser />} />
       
      </Routes> */}
    </div>
  );
}

export default App;
