import React, { useState } from 'react'
import { Form, Input,Button, message } from 'antd'
import {MailOutlined}from "@ant-design/icons"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function ForgotPassword() {
  const navigate= useNavigate()
  const [form]= Form.useForm()
  const [isLoading,setIsLoading] =useState(false)
  const onFinish=async(values)=>{
    // console.log(values);
    await handleSubmit(values)
    
  }
  const handleSubmit=async(values)=>{
    const {email,newPassword}=values
    if(!email || !newPassword){
      return message.error("Please enter your all inputs.")
      }
      setIsLoading(true)
      axios.post("http://localhost:8000/auth/forgot-password",{
        email,newPassword
      }).then((res)=>{
          message.success(res.data?.message || "Password updated successfully");
        form.resetFields();
        navigate("/auth/login")
      }).catch((err)=>{
         message.error(err.response?.data?.message || "Something went wrong");
      }).finally(()=>{
        setIsLoading(false)
      })
  }
  return (
    <div className='min-h-screen bg-slat-100 dark:bg-gray-700 flex items-center justify-center'>
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md ">
      <h1 className='text-center text-3xl mb-3 text-gray-700 dark:text-white' >Forgot password</h1>
    <Form
    layout='vertical'
    onFinish={onFinish}
    form={form}
    autoComplete='off'
    >
<Form.Item 
 label={<span className='text-gray-700 dark:text-white' >Email</span>}
 name="email"
 rules={[
  {required:true,message:"Please enter your email."},
  {type:"email",message:"Please enter your valid email."}
 ]}
 >
<Input prefix={<MailOutlined className="pr-3 text-gray-500" />} placeholder='Enter your email' />
</Form.Item>
<Form.Item 
 label={<span className='text-gray-700 dark:text-white' >New password</span>}
 name="newPassword"
 rules={[
  {required:true,message:"Please enter your email."},
  {pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
    message:"Password must contain at least one special character"}
 ]}
 >
<Input.Password  placeholder='Enter your new password' />
</Form.Item>
  <Form.Item>
    <Button htmlType='submit' loading={isLoading} type="primary" className="w-full" >Update Password</Button>
  </Form.Item>
    </Form>
     
     <p className='text-sm text-center text-gray-400' >Already have an account? <Link to="/auth/login" className='text-blue-600 hover:underline' >Login</Link></p>
      </div>
      
    </div>
  )
}
