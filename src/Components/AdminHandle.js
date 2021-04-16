import React, { Component } from 'react'


export class AdminHandle extends Component {
constructor(props) {
    super(props)

    this.state = {
         allviewApplication:[]
    }
}
componentDidMount(){
    var arr=JSON.parse(localStorage.getItem('leaveApplication'))||[]
    this.setState({
        allviewApplication:arr

    })
    
}


approveLeave=(e)=>{
var person=e.target.value
var arr=JSON.parse(localStorage.getItem('leaveApplication'))

for(var i=0;i<arr.length;i++){
    if(arr[i].App_id==person){
        arr[i].status='Approved'
        this.setState({
            allviewApplication:arr
        })
        break;
    }
}
localStorage.setItem('leaveApplication',JSON.stringify(arr))
}

rejectLeave=(e)=>{
    var person=e.target.value
    var arr=JSON.parse(localStorage.getItem('leaveApplication'))
    
    for(var i=0;i<arr.length;i++){
        if(arr[i].App_id==person){
            arr[i].status='Rejected'
            this.setState({
                allviewApplication:arr
            })
            break;
        }
    }
    localStorage.setItem('leaveApplication',JSON.stringify(arr))
    }





    renderingViewApplication=()=>{
return this.state.allviewApplication.map((application,index)=>{
    console.log(this.state.allviewApplication)
    const {name,App_id,FromDate,ToDate,NoOfDays,status}=application
    console.log(application)
    return (
        <tr key={index}>
            <td> {name}</td>
            <td> {FromDate}</td>
            <td> {ToDate}</td>
            <td>{NoOfDays}</td>
            <td> {status}</td>
            <td> 
                <button onClick={this.approveLeave} value={App_id} className="btn btn-primary"> Approve</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.rejectLeave} value={App_id} className='btn btn-primary'> Reject</button>
                        
            </td>


        </tr>
    )
})
    }
    signOut=()=>{
        this.props.history.push('/Login')
    }
    render() {
        return (
            <div className='container'>
                 {/* <button type="button" className='btn btn-primary right' onClick={this.signOut}> LogOut </button> */}
                <h2 style={{fontStyle:'bold'}}><i> WELCOME Admin </i></h2>
                <center><h3 className='text-danger'>   Leave summary   </h3>  </center>
                   

               <table className='table table-hover striped m-5' border='1'>
                   <tr>
                   <th scope='col'>Name </th>
                            <th scope='col'>FromDate </th>
                            <th scope='col'>ToDate </th>
                            <th scope='col'>Total Days </th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action </th>
                   </tr>
                   {this.renderingViewApplication()}
                   
                   {/* <Form.Group as={Row} id="form-signout-button">
    <Col sm={{ span: 2, offset: 2 }}>
      <Button type="button" onClick={this.signOut}>SignOut</Button>
    </Col>
  </Form.Group>  */}
               </table>
               
               
            </div>
        )
    }
}

export default AdminHandle

