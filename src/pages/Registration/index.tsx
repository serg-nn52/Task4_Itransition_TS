import React from 'react';
import { notification } from 'antd';
import AppForm from 'components/AppForm';
import { getAuth } from 'store/selectors';
import { Navigate } from 'react-router-dom';
import { fetchRegAction } from 'store/thunk';
import { setUserID } from 'store/slice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { TUsersType } from 'store/type';

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuth);

  const onFinish = (value: TUsersType): void => {
    dispatch(fetchRegAction(value));
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
        formTitle="Registration"
        buttonTitle="Go To Login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        pathRedirect="/login"
        isRegistration
      />
    </div>
  );
};

export default Registration;
