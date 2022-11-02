import {Routes,Route,Navigate} from "react-router-dom"
import {Main,Shop} from "./page"
import {Header} from "./component"
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector(state => state.loginRudcer.isLogin);
  const LoginRedirect = () =>{
    return isLogin ? <Shop/> : loginMessage();
  }
  function loginMessage(){
    alert("로그인해주세요")
    return <Navigate to="/"/>
  }
  return (
    <div className="App">
      <Header isLogin={isLogin}/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/shop" element={<LoginRedirect/>}/>
      </Routes>
    </div>
  );
}

export default App;
