"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
    router.push("/auth/verify-code");
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />

      <div className="text-center w-full!">
        <h3 className="section-title mb-2!">Sign Up</h3>
        <p className="text-sm text-[#7E7E7E]">
          Sign up with your email and password to get started.
        </p>

        <div className="w-full pt-12 grow text-start!">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {/* Name */}
            <Form.Item
              label="Name"
              name="name"
              className="form-item"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter your name" className="custom-input" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              className="form-item"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" className="custom-input" />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label="Password"
              name="password"
              className="form-item"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password
                placeholder="Enter your password"
                className="custom-input"
              />
            </Form.Item>

            {/* Terms Agreement */}
            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "You must agree to the Terms and Privacy Policy"
                        ),
                },
              ]}
            >
              <Checkbox className="text-[#7E7E7E] text-sm">
                I agree to all the Terms and privacy policies
              </Checkbox>
            </Form.Item>

            {/* Sign Up Button */}
            <Button
              htmlType="submit"
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]!  to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </div>

      <p className="text-sm text-[#7E7E7E]">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-[#A855F7] underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
