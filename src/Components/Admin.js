import React, {useState} from 'react'

function Admin() {

    const [use,setUse]=useState('');
    const [pass,setPass]=useState('');
    const adminArr=[{userName:'admin@gmail.com', passWord:'Admin@123'}]


    
    // componentWillMount=()=>{
    //     this.setState({
    //     setAdmin:JSON.parse(localStorage.getItem('UsersData'))
    //     })
    // }

    

    const Login=(e)=>{
        e.preventDefault();
        // setAdmin:JSON.parse(localStorage.getItem('UsersData'))
        for(let i=0;i<adminArr.length;i++){
            if(adminArr[i].userName==use &&adminArr[i].passWord==pass)
            {
                this.props.history.push('/AdminHandle')
            }else
            {
                this.props.history.push('/leaveApplication')

            }
        }

    }

    
    return (
        <div className="Login">
            <h2>AdminLogin</h2>
            <input type="text" placeholder="username" onChange={(e)=>{setUse(e.target.value)}}/>
            <input type="text" placeholder="password" onChange={(e)=>{setPass(e.target.value)}}/>
            <button onClick={Login}>Login</button>
        </div>
    )
}

export default Admin


