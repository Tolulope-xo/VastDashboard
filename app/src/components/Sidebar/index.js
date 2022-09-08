import React from "react";
import logo from "../../assets/vast.png";
import dashboard from "../../assets/dashboard.png";
import transaction from "../../assets/transaction.png";
import customers from "../../assets/customer.png";
import cards from "../../assets/card.png";
import analytics from "../../assets/Chart.png";
import { NavLink } from "react-router-dom";
import "./index.css";
const index = ({ children }) => {
  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: dashboard,
    },
    {
      path: "/transaction",
      name: "Transactions",
      icon: transaction,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: customers,
    },
    {
      path: "/cards",
      name: "Cards",
      icon: cards,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: analytics,
    },
  ];
  return (
    <div className="container">
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="vast_logo" />
      </div>

      {menuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeclassname="active"
        >
            <img className="link_icon" src={item.icon} alt="icons" />{" "}
            <div className="link_text">{item.name}</div>
        </NavLink>
      ))} 
    </div>
      <main>{children}

      </main>
    </div>
  );
};

export default index;
