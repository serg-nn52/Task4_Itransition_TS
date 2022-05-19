import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { TUsersType } from 'store/type';
import style from './style.module.scss';

interface IAppForm {
  formTitle: string;
  buttonTitle: string;
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: TUsersType) => void | undefined;
  onFinishFailed?: () => void | undefined;
  pathRedirect: string;
  isRegistration: boolean;
}

const AppForm: React.FC<IAppForm> = (props) => {
  const {
    formTitle,
    buttonTitle,
    onFinish,
    onFinishFailed,
    pathRedirect,
    isRegistration,
  } = props;
  const navigate = useNavigate();

  return (
    <Form
      className={style.form}
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2>{formTitle}</h2>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input placeholder="Please input your name!" />
      </Form.Item>

      {isRegistration ? (
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: false,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder="ivanov@yandex.by" type="email" />
        </Form.Item>
      ) : null}

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Please input your password!" />
      </Form.Item>

      <Form.Item className={style.buttons}>
        <div className={style.buttons}>
          <Button type="primary" htmlType="submit">
            {isRegistration ? 'Register' : 'Sign In'}
          </Button>
          <Button type="primary" onClick={() => navigate(`${pathRedirect}`)}>
            {buttonTitle}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default AppForm;
