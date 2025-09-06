import React, { useEffect, useState } from "react";
import { Button, message, Select } from "antd";
import axios from "axios";
import { Image, Table,Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function ManageBookings() {
  const [getAdminBooking, setGetAdminBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log("getAdminBooking", getAdminBooking);

  const handleChange = async (value, record) => {
    try {
      const res = await axios.put(
        "https://car-rental-backend-drab.vercel.app/booking/change-booking-status",
        {
          id: record._id,
          status: value,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      message.success(res.data.message);
      fetchData();
    } catch (err) {
      console.log(err.response?.data?.error || err.message);
      message.error(err.response.data.message || "Seomthin went wrong.");
    }
  };
  // ********Delete Booking*************
  const handleDelete = async (id) => {
    setGetAdminBooking((prev) => prev.filter((b) => b._id !== id));
    Modal.confirm({
      title: "Are you sure to delete this Booking?",
      okText: "Delete",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          const res = await axios.delete(
            `https://car-rental-backend-drab.vercel.app/booking/delete-booking/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          message.success(res.data.message);
        } catch (err) {
          console.log(err.response?.data?.error || err.message);
          message.error(err.response?.data?.message || "Something went wrong.");
          fetchData();
        }
      },
    });
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://car-rental-backend-drab.vercel.app/booking/admin-bookings",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setGetAdminBooking(res.data.Bookings);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response?.data?.error);
      message.error(err.response?.data.message || "Something went wrong");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "car",
      key: "image",
      render: (car) => (
        <Image
          src={car.image.url}
          alt="car"
          width={70}
          height={70}
          className="object-cover rounded-md"
        />
      ),
    },
    {
      title: "User Name",
      dataIndex: "user",
      key: "user",
      render: (user) => <span>{user.userName}</span>,
    },
    {
      title: "Date Range",
      dataIndex: "pickupDate",
      key: "dateRange",
      render: (text, record) => (
        <span>
          {new Date(record.pickupDate).toLocaleDateString()} -{" "}
          {new Date(record.returnDate).toLocaleDateString()}
        </span>
      ),
    },
    {
      title: "Total Amount",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`rounded-full px-2 py-1 ${
            status === "confirmed"
              ? "text-green-600 bg-green-400/15  font-semibold"
              : status === "cancelled"
              ? "bg-red-400/15 text-red-600"
              : "bg-yellow-400/15 text-yellow-600"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Select
          defaultValue={record.status}
          style={{ width: 120 }}
          name="status"
          onChange={(value) => handleChange(value, record)}
        >
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="confirmed">Confirm</Select.Option>
          <Select.Option value="cancelled">Cancel</Select.Option>
        </Select>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record._id)}>
          <DeleteOutlined /> Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="">
      <Table
        dataSource={getAdminBooking}
        loading={isLoading}
        bordered
        pagination={{ pageSize: 7 }}
        scroll={{ x: "max-content" }}
        columns={columns}
        rowKey="_id"
      />
    </div>
  );
}
