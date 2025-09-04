// import React from 'react'
// import { useAuthContext } from '../../context/AuthContext'

// import DashboardHeader from '../../component/dashboardHeader'
// import SideBar from '../../component/sideBar'
// import Index from './Routes'

// export default function Layout() {
//   const { user } = useAuthContext()

//   return (
//     <div className="flex flex-col min-h-screen">
//       <DashboardHeader user={user} />
//       <div className="flex flex-1">
//         <div className=" md:w-60">
//           <SideBar />
//         </div>
//         <div className="flex-1  ">
//           <Index />
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  UsergroupAddOutlined,
  LogoutOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Index from "./Routes";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../component/dashboardHeader";

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // Function to create menu items
  function getItem(label, key, icon, children = null, onClick = null) {
    return {
      key,
      icon,
      children,
      label,
      onClick,
    };
  }

  // Sidebar menu items
  const items = [
    getItem("Dashboard", "1", <HomeOutlined />, null, () =>
      navigate("/dashboard")
    ),

    getItem("Users", "sub1", <UsergroupAddOutlined />),
    getItem("Products", "sub2", <AppstoreAddOutlined />, [
      getItem("Add car", "6", <PlusOutlined />, null, () =>
        navigate("/dashboard/add-car")
      ),
      getItem("Manage Car", "8", <i className="ri-car-fill "></i>, null, () =>
        navigate("/dashboard/manage-car")
      ),
      getItem(
        "Manage Bookings",
        "9",
        <i className="ri-clipboard-line"></i>,
        null,
        () => navigate("/dashboard/manage-bookings")
      ),
      // getItem('Sells Products', '9', <AppstoreOutlined />, null, null),
    ]),
  ];

  return (
    <>
      <DashboardHeader />

      <Layout style={{ minHeight: "100vh" }}  >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          style={{
            background: "#ffffff",
            position: "sticky",
            top: 0,
            left: 0,
            height: "100vh",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Keeps Logout at the bottom
          }}
        >
          {/* Main Menu */}
          <div>
            <div className="demo-logo-vertical" />
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              style={{ height: "84vh", paddingTop: "10px" }}
              onClick={({ key }) => {
                // Handling click navigation
                const selectedItem = items.find((item) => item.key === key);
                if (selectedItem?.onClick) {
                  selectedItem.onClick();
                }
              }}
            />
          </div>

          {/* Logout Button at the Bottom */}
          <Menu
            theme="light"
            mode="inline"
            items={[
              getItem("Logout", "logout", <LogoutOutlined />, null, () => {
                console.log("User Logged Out");
                navigate("/login"); // Redirect to login page on logout
              }),
            ]}
            onClick={({ key }) => {
              if (key === "logout") {
                console.log("Logging out...");
                navigate("/login");
              }
            }}
          />
        </Sider>

        {/* Main Content */}
        <Layout style={{ background: "#ffffff" }}>
          <Index />
        </Layout>
      </Layout>
    </>
  );
};

export default App;
