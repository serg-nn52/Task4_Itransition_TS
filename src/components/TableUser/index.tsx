import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';

import {
  fetchRemoveUsers,
  fetchBanUsers,
  fetchGetUserList,
  fetchUnblockUsers,
} from 'store/thunk';

import { resetAuth } from 'store/slice';
import { getUserName } from 'store/selectors';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { TUsersType } from 'store/type';
import { useAppSelector } from 'hooks/useAppSelector';
import { getLoading, getUsersList } from '../../store/selectors';
import style from './style.module.scss';

const TableUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const [chek, setChek] = useState<{ id: string }[]>([]);
  const dispatchUserList = () => {
    dispatch(fetchGetUserList());
  };

  useEffect(dispatchUserList, [dispatch]);

  const userList = useAppSelector(getUsersList);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Date Registration',
      dataIndex: 'dateReg',
    },
    {
      title: 'Date last login',
      dataIndex: 'dateLogin',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  const data =
    userList === null
      ? []
      : userList.map((el: TUsersType) => {
          return {
            key: el.id,
            id: el.id,
            name: el.name,
            email: el.email,
            dateReg: el.dateReg,
            dateLogin: el.dateLogin,
            status: el.status ? 'active' : 'ban',
          };
        });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setChek(selectedRows);
    },
  };

  const checkedUsers = chek.map((el: TUsersType) => {
    return { id: el.id };
  });

  const userName = useAppSelector(getUserName);
  const loading = useAppSelector(getLoading);

  const handlerRemove = () => {
    dispatch(fetchRemoveUsers(checkedUsers));
    if (chek.filter((el: TUsersType) => el.name === userName).length) {
      dispatch(resetAuth());
    }
  };

  const handlerBan = () => {
    dispatch(fetchBanUsers(checkedUsers));
  };

  const handlerUnblock = () => {
    dispatch(fetchUnblockUsers(checkedUsers));
  };

  if (!data.length && !loading) {
    return <h2>Данные не получены, попробуйте позднее!</h2>;
  }
  if (data.length)
    return (
      <>
        <div className={style.buttons}>
          <Button type="primary" onClick={handlerBan}>
            Block
          </Button>
          <Button type="primary" onClick={handlerUnblock}>
            Unblock
          </Button>
          <Button type="primary" onClick={handlerRemove}>
            Delete
          </Button>
        </div>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </>
    );
  return null;
};

export default TableUser;
