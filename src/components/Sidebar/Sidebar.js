import React from 'react';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
    const navigate=useNavigate()
    const items = [
        {
            icon1: UserOutlined,
            head: "Dashboard",
            onclick: () => {
                navigate("/charts")
                
            },
        },
        {
            icon1: UserOutlined,
            head: "Students",
            onclick: () => {
                navigate("/addbutton")
                
            },
        },
        {
            icon1: UserOutlined,
            head: "Courses",
            onclick: () => {
                navigate("/course")
                
            },
            
        },
        {
            icon1: UserOutlined,
            head: "Attendance",
            onclick: () => {
                navigate("/addattendance")
                
            },
        },
    ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon.icon1),
        label: icon.head,
        onClick: icon.onclick,
      }));
  const {
    token: { colorBgContainer },
} = theme.useToken();
  return (
   
<>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <h2 className='ms-3 mt-2 text-white'>Menu</h2>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      
      
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
       
     
   </>
  );
};
export default Sidebar;