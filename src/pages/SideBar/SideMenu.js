import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../asset/css/basiclayout.css";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from 'react-router-dom';

function SideMenu(props) {
  return (
    <div className="mt-5 bg-dark">
      
      <Accordion defaultActiveKey="" className="sideMenuColor" flush>
      <Accordion.Item eventKey="0">
         <NavLink to="/" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>
          <Accordion.Header className="menuItemHeader">
          Authentication
          </Accordion.Header>
          </NavLink>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
         {/* <NavLink to="/remitter/remitterinfo" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}> */}
          <Accordion.Header className="menuItemHeader">
             Remitter
          </Accordion.Header>
          {/* </NavLink> */}
          <Accordion.Body>
            <ListGroup style={{ overflow: "hidden", margin: "0px" }}>
              <ListGroup.Item onClick={props.onClick} className="activeMenu">
               <NavLink to="/remitter/remitterinfo" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>Remitter Information</NavLink>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <NavLink to="/remitter/sendotp" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>Remitter Send-OTP</NavLink> 
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <NavLink to='/remitter/resendotp' style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>Remitter Resend otp</NavLink>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <NavLink to="/remitter/verifyotp" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>Verify Remitter OTP</NavLink>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
               <NavLink to="/remitter/balance" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}> Remitter Balance</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
          {/* </NavLink> */}
        </Accordion.Item>
        <Accordion.Item className="overflow" eventKey="2">
          <NavLink to="/beneficiary/register" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>
            <Accordion.Header className="menuItemHeader">
              Beneficiary
            </Accordion.Header>
            </NavLink>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
               <NavLink to="/beneficiary/register" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>Beneficiary Create </NavLink>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <NavLink to="/beneficiary/list" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}> Beneficiary List</NavLink>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
               <NavLink to="/beneficiary/delete" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}> Delete Beneficiary</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
         <NavLink to="/sendmoney" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}>
          <Accordion.Header className="menuItemHeader">
            Send Money
          </Accordion.Header>
          </NavLink>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
               <NavLink to="/sendmoney/sendmoney" style={({ isActive }) => ({  color: isActive ? 'blue' : 'white'  })}> Send Money</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header className="menuItemHeader">
            <NavLink to="" style={({ isActive }) => ({  color: isActive ? 'white' : 'white'  })}>Transaction Requery</NavLink>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
              <NavLink to="/transactionmoney" style={isActive=>({color:isActive?"green":"blue"})} >Transaction Money</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SideMenu;
