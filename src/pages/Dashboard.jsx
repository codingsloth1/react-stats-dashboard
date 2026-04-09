import React from 'react';
import classes from './Dashboard.module.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';

const App = () => {
 

  return (
    <div className={classes.dashboard}>
      <div className={classes.formContainer}>
        <h2 className={classes.title}>Login</h2>

        <Form
          name="login"
          initialValues={{ remember: true }}
         
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your User Email!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a href="#" className={classes.link}>Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className={classes.button}
            >
              Log in
            </Button>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              or <a href="#" className={classes.link}>Register now!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;



