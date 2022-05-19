import React from 'react';
import { Button, Tooltip } from 'antd';
import { resetAuth } from 'store/slice';
import { getUserName } from 'store/selectors';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import style from './style.module.scss';

const LogOut: React.FC = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(getUserName);

  const userLogOut = () => {
    dispatch(resetAuth());
  };

  return (
    <Tooltip title={`${userName}, Вы точно хотите выйти?`}>
      <Button
        type="primary"
        shape="circle"
        className={style.btn}
        onClick={userLogOut}
      >
        Sign Out
      </Button>
    </Tooltip>
  );
};

export default LogOut;
