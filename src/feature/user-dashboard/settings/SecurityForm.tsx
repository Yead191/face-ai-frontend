"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import "./style.css";

const SecurityForm = () => {
  const [form2] = Form.useForm();
  return (
    <Form form={form2} layout="vertical">
      <Form.Item label="Current Password" className="form-item">
        <Input.Password placeholder="**************" className="custom-input" />
      </Form.Item>
      <Form.Item label="New Password" className="form-item">
        <Input.Password placeholder="**************" className="custom-input" />
      </Form.Item>
      <Form.Item label="Re-New Password" className="form-item">
        <Input.Password placeholder="**************" className="custom-input" />
      </Form.Item>
      <Button type="primary" className="save-button">
        Save Changes
      </Button>
    </Form>
  );
};

export default SecurityForm;
