import axios from "axios"

function login(id,pw){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://localhost:8000/login",
            data :{
                id,pw
            }
        })
        console.log(user)
        if(user.data)
        {
            dispatch({type:"LOGIN",payload:{id,pw}})
        }else{
            alert("없는 아이디 입니다. 회원가입 하세요")
        }
    }
}
function logOut(){
    return (dispatch,getState)=>{
        console.log(getState())
        if(getState().loginRudcer.isLogin){
            dispatch({type:"LOGOUT"})
        }
    }
}
function signUp(id,pw,setWrap){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://localhost:8000/signUp",
            data :{
                id,pw
            }
        })

        console.log(user)
        alert(user.data)
        if(user.data ==="가입이 완료되었습니다."){
            setWrap();
        }
    }
}

export const loginAction = {login,signUp,logOut}