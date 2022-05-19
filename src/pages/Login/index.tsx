import React from 'react';
import { getAuth } from 'store/selectors';
import { notification } from 'antd';
import AppForm from 'components/AppForm';
import { Navigate } from 'react-router-dom';
import { fetchLogin } from 'store/thunk';
import { setUserID } from 'store/slice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { TUsersType } from 'store/type';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(getAuth);

  const onFinish = (value: TUsersType) => {
    dispatch(fetchLogin(value));
    dispatch(setUserID(value.name));
  };

  const onFinishFailed = () => {
    notification.error({ message: 'Error sending!' });
  };
  return isAuth && isAuth !== 'loading' ? (
    <Navigate to="/" />
  ) : (
    <div>
      <AppForm
        formTitle="Authorization"
        buttonTitle="Go To Registration"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        pathRedirect="/registration"
        isRegistration={false}
      />
    </div>
  );
};

export default Login;
