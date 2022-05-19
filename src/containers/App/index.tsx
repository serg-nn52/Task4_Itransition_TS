import React, { useEffect } from 'react';
import { getStatusUser, getUserName } from 'store/selectors';
import { resetAuth } from 'store/slice';
import { notification } from 'antd';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import CreateRoutes from '../Routes';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const userName = useAppSelector(getUserName);
  const userStatus = useAppSelector(getStatusUser(userName!));

  useEffect(() => {
    if (!userStatus) {
      dispatch(resetAuth());
      notification.error({ message: 'You are banned!' });
    }
  }, [userStatus, dispatch]);

  return <CreateRoutes />;
};

export default App;
