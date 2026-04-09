import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
  { key: '1', icon: <PieChartOutlined />, label: 'Save Products' },
  { key: '2', icon: <DesktopOutlined />, label: 'Products' },
  { key: '3', icon: <ContainerOutlined />, label: 'Dashboard' },
 
  
];
const SideBar = ({handleChanges}) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
    onClick={handleChanges}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default SideBar;



  