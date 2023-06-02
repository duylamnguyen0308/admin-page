import { MainLayout } from "components/MainLayout"
import { Space, Table, Tag, Button, Modal, Checkbox, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { users } from "store/models";
import swal from "sweetalert";
import axios from "axios";




const Users = () => {

  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const user = usersStore.listUser

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, [])

  // handleDelete = (item) => {
  //   const newsId = item.id;
  //   console.log(newsId);
  // }
 
  function deletee(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}` + id, {
        headers: { "Content-Type": "application/json" }
      })
      .then(() => {

        alert('success')
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.data === "Organization Delete failed") {

        }
      });
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',


    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email ',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (record) => (
        <div>{record.city}</div>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    


    {
      title: 'Action',
      key: 'action',

      render: (record) => (

        <Space size="middle">

          <button
            style={{ fontSize: "xx-large", fontFamily: "initial" }}
            onClick={() => {
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  deletee(record.id);
                } else {
                  swal("Your imaginary file is safe!");
                }
              });
            }}
            className="deleteButton"
          >
            Delete
          </button>
          {/* <DeleteOutlined onClick={() => this.handleDelete(item)}/> */}
        </Space>
      ),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    const newData = user.concat([{
      key: Math.floor(Math.random() * 10000) + 1,
      name: values.name,
      username: values.username,
      email:values.email,
      address:values.address,
      phone: values.phone,
      tags: ["cool", "teacher"],
    }]);
    console.log(newData)
    dispatch.users.setListUser(newData);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <MainLayout>
      <div>
        <Button type="primary" shape="round" onClick={showModal} >
          Add User
        </Button>
        <Modal title="Add User" open={isModalOpen} onCancel={handleCancel}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Username"
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="address"
              name='address'
              rules={[
                {
                  required: true,
                  message: 'Please input your address!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >

              <Button type="primary" htmlType="submit">
                add
              </Button>
            </Form.Item>
          </Form>

        </Modal>

        <Table columns={columns} dataSource={user} />;
      </div>
    </MainLayout>
  )
}
export default Users;