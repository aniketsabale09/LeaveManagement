import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

class LeaveApplication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUserDetails: {},
      FirstName: "",
      LeaveType: "",
      FromDate: "",
      ToDate: "",
      NoOfDays: "",
      Department: "",
      index: "",
      Reason: "",
      status: "",
      cur_date: "",
      name:'',
      unique_id: "",
      leaveApplication: [],
      disabled: true,
    };
  }
  
  componentDidMount() {
    alert('componentDidMount')
    this.date_validation();
    const { params } = this.props.match;
    const userId = params.id;

    console.log(userId)
    const details = JSON.parse(localStorage.getItem("UsersData"))||[];
    const currentUserDetails=details.find(obj=>obj.Email==userId)
//    const cur_date=details.find(obj=>obj.cur_date==FromDate && obj.cur_date==ToDate)
        console.log('user is '+currentUserDetails)
    details.map((user) => {
      this.setState({
        currentUser: user,
        currentUserDetails:currentUserDetails,
  //      cur_date:cur_date
      });
    });
    var leave_application_current_user = JSON.parse(
      localStorage.getItem("leaveApplication")
    );
    var arr = [];
    if (leave_application_current_user == null) {
      leave_application_current_user = [];
    } else {
      leave_application_current_user.map((application) => {
        if (userId == application.userId) {
          arr.push(application);
        }
      });
    }
    this.setState({
      leaveApplication: arr,
    });
  }
  
  onClickHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitData = () => {

    if(this.validForm)
    {
    const from_date = this.state.FromDate;
    const to_date = this.state.ToDate;
    const NumOfDays = this.state.NoOfDays;
    const leave = this.state.LeaveType;
    const dept = this.state.Department;
    const reas = this.state.Reason;
    const cur_date=this.state.cur_date;
    const status = "pending";
    const userid = this.state.currentUserDetails.Email;
    const val = Math.floor(100 + Math.random() * 900);
    const FirstName = this.state.currentUserDetails.FirstName;
    console.log(FirstName);
    var LeaveApplications = JSON.parse(
      localStorage.getItem("leaveApplication")
    );
    console.log(LeaveApplications)
    if (LeaveApplications == null) {
      LeaveApplications = [];
    }
    var current_user_Application = {
      App_id: val,
      LeaveType: leave,
      name: FirstName,
      userId: userid,
      cur_date:cur_date,
      FromDate: from_date,
      ToDate: to_date,
      Department: dept,
      Reason: reas,
      status: status,
      NoOfDays: NumOfDays,
    };
    LeaveApplications.push(current_user_Application);
    localStorage.setItem("leaveApplication", JSON.stringify(LeaveApplications));
    var arr = JSON.parse(localStorage.getItem("leaveApplication"));
    var new_Arr = [];
    arr.map((a) => {
      console.log(a.userid)
      console.log(this.state.currentUserDetails.Email)
      if (a.userId == this.state.currentUserDetails.Email) {
        new_Arr.push(a);
        console.log(new_Arr)
      }
    });
    console.log(new_Arr);
    this.setState({
      leaveApplication: new_Arr,
      FromDate: "",
      ToDate: "",
    });
  }};

  date_validation = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    this.setState({
      cur_date: today,
    });
  };

  noOfDays = () => {
    console.log("hi");
    var date1 = new Date(this.state.FromDate);
    var date2 = new Date(this.state.ToDate);
    //date1=Date(date1);
    //date2=Date(date2);
    console.log(date1);
    console.log(date2);

    var diff = date2.getTime() - date1.getTime();
    var NumOfDays = diff / (1000 * 24 * 3600);
    console.log(NumOfDays);
    this.setState({
      NoOfDays: NumOfDays,
    });
  };


  validForm = () => {
    var isValid = true;
    if (this.state.LeaveType ==='') {
      this.setState({ leaveError: "Please select leave type" });
      isValid = false;
    } else if (this.state.LeaveType===this.state.LeaveType) {
      this.setState({ leaveError: "" });
      isValid = true;
    }
    if (this.state.FromDate==='') {
      this.setState({ dateError: "Please enter from date" })
      isValid = false;
  } else if (this.state.FromDate=== this.state.FromDate) {
      this.setState({ dateError: "" })
      isValid = true;
  }

  if (this.state.ToDate==='') {
    this.setState({ dateError: "Please enter from date" })
    isValid = false;
} else if (this.state.ToDate=== this.state.ToDate) {
    this.setState({ dateError: "" })
    isValid = true;
}

if (this.state.Department==='') {
  this.setState({ deptError: "Please fill dept name" })
  isValid = false;
} else if (this.state.Department=== this.state.Department) {
  this.setState({ deptError: "" })
  isValid = true;
}

if (this.state.Reason==='') {
  this.setState({ deptError: "Please enter reason" })
  isValid = false;
} else if (this.state.LeaveType=== this.state.LeaveType) {
  this.setState({ deptError: "" })
  isValid = true;
}
  return isValid;
}

 

  onchange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => e.target.name == "ToDate" && this.noOfDays()
    );
  };

 

  // logOut = () => {
  //   localStorage.setItem('loginStatus',JSON.stringify([{loginStatus:false}]))
  //   this.props.history.push("/Login");
  // };

  render() {
    return (
      <div>
        {/* <button
          type="button"
          onClick={this.logOut}
          className="btn btn-primary right"
        >
          {" "}
          LogOut
        </button> */}
        <h2>Welcome {this.state.currentUserDetails.FirstName}</h2>
        <h2>You can enter your Leave Details here. </h2>
        <div id="role-form-outer-div">
          <Form id="form">
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Employee Name
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control
                  required
                  type="Text"
                  placeholder="Name"
                  name="FirstName"
                  disabled
                  value={this.state.currentUserDetails.FirstName}
                  onChange={this.onClickHandle}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Leave Type
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control
                  as="select"
                  required
                  onChange={this.onchange}
                  name="LeaveType"
                >
                  <option value="">Select your option</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Privilege Leave">Privilege Leave</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                FromDate
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control
                  type="date"
                  required
                  placeholder="FromDate"
                  name="FromDate"
                  value={this.state.FromDate}
                  onChange={this.onchange}
                  min={this.state.cur_date}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                ToDate
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control
                  type="date"
                  required
                  placeholder="ToDate"
                  name="ToDate"
                  value={this.state.ToDate}
                  onChange={this.onchange}
                  min={this.state.FromDate}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Total Count of Leave Days
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Total Leave Count"
                  name="noOfDays"
                  value={this.state.NoOfDays}
                  onChange={this.onchange}
                  min={this.state.noOfDays}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Department
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control
                  as="select"
                  required="*"
                  name="dept"
                  onChange={this.onchange}
                  name="Department"
                >
                  <option value="" disabled selected>
                    Select your department
                  </option>
                  <option value="IT">IT</option>
                  <option value="Development">Development</option>
                  <option value="Finance">Finance</option>
                  <option value="HR">HR</option>
                  <option value="Production">Production</option>
                  <option value="Testing">Testing</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Reason for leave
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Reason for leave"
                  name="Reason"
                  value={this.state.Reason}
                  onChange={this.onClickHandle}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Leave Status
              </Form.Label>
              <Col sm={3} className="form-input">
                <Form.Control as="select" required name="status">
                  <option value="1" selected>
                    Pending
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              id="form-submit-button"
              as={Row}
              id="form-cancel-button"
            >
              <Col
                sm={{ span: 3, offset: 4 }}
                sm={{ span: 3, offset: 4 }}
                id="form-cancel-button-inner"
              >
                <Button type="submit" onClick={this.submitData}>
                  Submit
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button type="reset">cancel</Button>
              </Col>
            </Form.Group>
            
            {/* <Form.Group as={Row}id="form-cancel-button">
    <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
      <Button type="reset" onClick={this.props.onFormClose}>cancel</Button>
    </Col>
  </Form.Group> */}
          </Form>
        </div>
      </div>
    );
  }
}

export default LeaveApplication;
