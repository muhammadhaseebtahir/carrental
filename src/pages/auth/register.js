import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Register() {
    const [isLoading,setIsLoading]= useState(false)
  const [form] = Form.useForm();
  const onFinish = async(values) => {
    // console.log("values", values);
    await handelSubmit(values)
  };

  const handelSubmit=async(values)=>{
    const {userName,email,password}=values
    if(!userName || !email || !password){
        return message.error("Please fill all the inputs.")
    }
     
    




  }


  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="mb-3 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Register
        </h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label={<span className="text-gray-700 dark:text-gray-300">UserName</span>}
            name="userName"
            rules={[{ required: true, message: "Please enter you name" }]}
          >
            <Input
              prefix={<UserOutlined className="pr-3 text-gray-500" />}
              placeholder="Please enter your name"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700 dark:text-gray-300">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter you email" },
              { type: "email", message: "Please enter valid email" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="pr-3 text-gray-500" />}
              placeholder="Please enter your email"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700 dark:text-gray-300">Password</span>}
            name="password"
            rules={[
              { required: true, message: "Please enter you password" },
              {
                pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
                message: "Password must contain at least one special character",
              },
            ]}
          >
            <Input.Password placeholder="Please enter your password" />
          </Form.Item>

          <Form.Item>
            <Button loading={isLoading} type="primary" className="w-full">
              Register
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-sm text-gray-400 dark:text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
