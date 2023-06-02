import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    CopyOutlined ,
    FontColorsOutlined,
    AreaChartOutlined,
    UnorderedListOutlined
  } from '@ant-design/icons';
  import { NavLink } from 'react-router-dom';
  import { Button, Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
  const { Header, Sider, Content } = Layout;
  export const MainLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout style={{
        height:"200vh",
        }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <NavLink to="/">Dashboard</NavLink>
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <NavLink to="/user">Users</NavLink>
              },
              {
                key: '3',
                icon: <CopyOutlined />,
                label: <NavLink to="/costumer">Costumers</NavLink>
              },
              {
                key: '4',
                icon: <FontColorsOutlined />,
                label: <NavLink to="/product">Product</NavLink>
              },
              {
                key: '5',
                icon: <AreaChartOutlined />,
                label: <NavLink to="/oder">Oders</NavLink>
              },
              {
                key: '6',
                icon: <UnorderedListOutlined />,
                label: <NavLink to="/coupon">Coupon</NavLink>
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
