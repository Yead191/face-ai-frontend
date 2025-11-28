"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import "./style.css";

const ProfileInfoForm = () => {
  const [form1] = Form.useForm();
  return (
    <Form form={form1} layout="vertical">
      <Form.Item label="Full Name" className="form-item">
        <Input placeholder="Alex Johnson" className="custom-input" />
      </Form.Item>
      <Form.Item label="Email" className="form-item">
        <Input placeholder="Alex.34@yahoo.com" className="custom-input" />
      </Form.Item>
      <Form.Item label="Phone Number" className="form-item">
        <Input placeholder="+64383271322" className="custom-input" />
      </Form.Item>
      <Button type="primary" className="save-button">
        Save Changes
      </Button>
    </Form>
  );
};

export default ProfileInfoForm;
