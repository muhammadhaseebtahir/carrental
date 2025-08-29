import React, { useEffect, useState } from "react";
import { Empty, Image, message, Space, Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

export default function ManageCar() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/dashboard/getProducts",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setProduct(res.data.data);
      } catch (err) {
        console.log("error", err);
        message.error(err.response?.data?.message || "Something went wrong");
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleEdit = (record) => {
    console.log("edit", record);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 120,
      fixed: "left",
      render: (image) => (
        <Image
          src={image}
          alt="car"
          width={70}
          height={70}
          className="object-cover rounded-md"
        />
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: 150,
      responsive: ["xs", "sm", "md", "lg"], // ✅ hamesha visible
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      width: 150,
      responsive: ["md", "lg"], // ✅ sirf md se upar visible
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      width: 120,
      responsive: ["md", "lg"],
    },
    {
      title: "Price Per Day $",
      dataIndex: "pricePerDay",
      key: "pricePerDay",
      width: 180,
      responsive: ["xs", "sm", "md", "lg"], // ✅ hamesha visible
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 150,
      responsive: ["lg"], // ✅ sirf large screen par
    },
    {
      title: "Transmission",
      dataIndex: "transmission",
      key: "transmission",
      width: 150,
      responsive: ["lg"],
    },
    {
      title: "Fuel Type",
      dataIndex: "fuel_type",
      key: "fuel_type",
      width: 150,
      responsive: ["lg"],
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 300,
      responsive: ["lg"],
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      fixed: "right",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          />
        </Space>
      ),
      responsive: ["xs", "sm", "md", "lg"], // ✅ hamesha visible
    },
  ];

  return (
    <div className="px-4 pt-10 md:px-6 w-full">
      <h1 className="text-3xl font-semibold">Manage Cars</h1>
      <p className="text-gray-500">
        View all listed cars, update their details, or remove them from the
        booking platform.
      </p>

      {product.length === 0 && !isLoading ? (
        <Empty description="No products in table" />
      ) : (
        <div className="overflow-x-auto w-full">
          <Table
            dataSource={product}
            loading={isLoading}
            bordered
            pagination={{ pageSize: 7 }}
            scroll={{ x: "max-content" }}
            columns={columns}
            rowKey="_id"
          />
        </div>
      )}
    </div>
  );
}
