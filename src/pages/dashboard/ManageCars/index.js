import React, { useEffect, useState } from "react";
import {
  Empty,
  Image,
  message,
  Space,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Upload,
} from "antd";

import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useProductContext } from "../../../context/ProductContext";

export default function ManageCar() {
  const { fetchData, product } = useProductContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUploadChange = ({ fileList }) => {
    if (fileList && fileList.length > 0) {
      const fileObj = fileList[0].originFileObj;
      if (fileObj) {
        const previewUrl = URL.createObjectURL(fileObj);
        setImageUrl(previewUrl); // preview ke liye
        setFile(fileObj); // backend ke liye
      }
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);

      try {
        await fetchData();
      } catch (err) {
        console.log("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const showUpdateModal = (record) => {
    form.setFieldsValue(record);
    setSelectedProduct(record);
    // Agar product ki image hai to use show karo
    if (record.image?.url) {
      setImageUrl(record.image.url);
    } else {
      setImageUrl(null);
    }
    setIsModalVisible(true);
  };

  // *****************Handle update *************
  const handleUpdate = async (values) => {
    if (!selectedProduct) return;

    try {
      const formData = new FormData();

      // sirf form fields bhejna hai
      formData.append("product", JSON.stringify(values));

      // agar user ne nayi image select ki hai to hi bhejo
      if (file) {
        formData.append("image", file); // ✅ ab actual file jayegi
      }

      const res = await axios.put(
        `http://localhost:8000/dashboard/updateProduct/${selectedProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.status === 200) {
        message.success("Product updated successfully");
        fetchData();
        setIsModalVisible(false);
        setFile(null); // reset
      }
    } catch (err) {
      console.log("Error updating product:", err);
      message.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // *******************Handle Delete ********************
  const handleDelete = async (_id) => {
    Modal.confirm({
      title: "Are you sure to delete this product?",
      okText: "Delete",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          const res = await axios.delete(
            `http://localhost:8000/dashboard/deleteProduct/${_id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (res.status === 200) {
            message.success("Product deleted successfully");
            fetchData();
          } else {
            message.error(res.data.message);
          }
        } catch (err) {
          message.error(err.response?.data?.message || "Something went wrong");
        }
      },
    });
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Image
          src={image.url}
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
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Price/Day ($)",
      dataIndex: "pricePerDay",
      key: "pricePerDay",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Transmission",
      dataIndex: "transmission",
      key: "transmission",
    },
    {
      title: "Fuel Type",
      dataIndex: "fuel_type",
      key: "fuel_type",
    },
    {
      title: "Seating Capacity",
      dataIndex: "seating_capacity",
      key: "seating_capacity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-full  ${
            status === "available"
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500 "
          }`}
        >
          {status === "available" ? "Available" : "Unavailable"}
        </span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 300,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => showUpdateModal(record)}
          />
          <Button
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="px-4 pt-10 md:px-6 w-full space-y-3">
      <h1 className="text-3xl font-semibold">Manage Cars</h1>
      <p className="text-gray-500">
        View all listed cars, update their details, or remove them from the
        booking platform.
      </p>
      <div className="pt-10">
        {product.length === 0 && !isLoading ? (
          <Empty description="No products in table" />
        ) : (
          <Table
            dataSource={product}
            loading={isLoading}
            bordered
            pagination={{ pageSize: 7 }}
            scroll={{ x: "max-content" }}
            columns={columns}
            rowKey="_id"
          />
        )}
      </div>

      {/* *************Update Model************* */}

      <Modal
        title="Update Product"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
        okText="Update"
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          {/* Image Upload Field */}
          <Form.Item label="Image">
            <Upload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={() => false}
              fileList={[]}
              onChange={handleUploadChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>

          <Form.Item name="brand" label="Brand">
            <Input />
          </Form.Item>
          <Form.Item name="model" label="Model">
            <Input />
          </Form.Item>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-0 sm:gap-x-4">
            <Form.Item name="year" label="Year">
              <Input />
            </Form.Item>
            <Form.Item name="pricePerDay" label="Price/Day ($)">
              <Input />
            </Form.Item>
            <Form.Item name="category" label="Category">
              <Select>
                <Select.Option value="sedan">Sedan</Select.Option>
                <Select.Option value="suv">SUV</Select.Option>
                <Select.Option value="hatchback">Van</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="transmission" label="Transmission">
              <Select>
                <Select.Option value="manual">Manual</Select.Option>
                <Select.Option value="automatic">Automatic</Select.Option>
                <Select.Option value="semi-automatic">
                  Semi-Automatic
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="fuel_type" label="Fuel Type">
              <Select>
                <Select.Option value="petrol">Petrol</Select.Option>
                <Select.Option value="diesel">Diesel</Select.Option>
                <Select.Option value="electric">Electric</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="seating_capacity" label="Seating Capacity">
              <Input />
            </Form.Item>
          </div>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
