import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await handleSubmit(values);
  };
  const handleSubmit = async (values) => {
    const { email, password } = values;
    if (!email || !password) {
      return message.error("Please fill all the inputs.");
    }
    console.log(values);

    axios
      .post("http://localhost:8000/auth/login", {
        email,
        password,
      })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token",token);
        form.resetFields();
        message.success(res.data?.message || "Successfully Login." );

      })
      .catch((err) => {
        message.error(err?.response?.data?.message || "Something went wrong.");
      }).finally(()=>{
        setIsLoading(false);

      })

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-xl shadow-lg p-6 bg-white dark:bg-gray-800 ">
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white ">
          Login
        </h1>

        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label={
              <span className=" text-gray-700 dark:text-white">Email</span>
            }
            name="email"
            rules={[
              { required: true, message: "Please enter your email." },
              { type: "email", message: "Please enter your valid email" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="pr-3 text-gray-500" />}
              placeholder="Plesse enter your email."
            />
          </Form.Item>
          <div className="flex justify-between items-center mb-1">
            <label className="text-gray-700 dark:text-white font-medium" >Password</label>
          <Link to="/auth/forgot-password" className="text-blue-500  hover:underline" >Forgot Password</Link>
          </div>
          <Form.Item
           
            name="password"
            rules={[
              { required: true, message: "Please enter your email." },
              {
                pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
                message: "Password must contain at least one special character",
              },
            ]}
          >
            <Input.Password placeholder="Plesse enter your password." />
          </Form.Item>
          <Form.Item>
            <Button
            htmlType='submit'
              type="primary"
              loading={isLoading}
              className="w-full cursor-pointer"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center text-sm text-gray-400 dark:text-gray-400 ">
          Create new account?{" "}
          <Link
            to="/auth/register"
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
