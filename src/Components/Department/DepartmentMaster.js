import React, { useEffect } from 'react'
import { Table } from "antd";
import { DepartmentData } from '../../Redux/Action/Department-list';
import { useDispatch, useSelector } from 'react-redux';

const DepartmentMaster = () => {

  const dispatch = useDispatch();
  const DepartmentList = useSelector((state) => state?.DepartmentList?.data)
  console.log('DepartmentList', DepartmentList)

  useEffect(() => {
    dispatch(DepartmentData());
  },[])
  
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'Id',
    },
    {
      title: 'Department Name',
      dataIndex: 'DepartmentName',
    },
  ];

  return (
    <div className='App'>
      <Table dataSource={DepartmentList} columns={columns} />;
    </div>
  )
}

export default DepartmentMaster