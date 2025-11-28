"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import Link from "next/link";

export default function LoginForm() {
  const [form1] = Form.useForm();

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <AuthLogo />
      <div className="text-center">
        <h3 className="section-title mb-2!">Sign In</h3>
        <p className="text-sm text-[#7E7E7E]">
          Enter your email and password to access your account
        </p>

        <div className="w-full pt-12 grow">
          <Form form={form1} layout="vertical">
            {/* Email */}
            <Form.Item label="Email" className="form-item">
              <Input placeholder="Enter your email" className="custom-input" />
            </Form.Item>

            {/* Password */}
            <Form.Item label="Password" className="form-item">
              <Input.Password
                placeholder="Enter your password"
                className="custom-input"
              />
            </Form.Item>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mb-4">
              <Checkbox>Remember me</Checkbox>
              <button className="text-[#7E7E7E] text-sm hover:text-white transition cursor-pointer">
                Forgot Password
              </button>
            </div>

            {/* Sign In */}
            <Button
              block
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]!  to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Sign In
            </Button>

            {/* Sign In with Google */}
            <Button
              block
              className="h-10! w-full! lg:h-12! bg-white! text-black! cursor-pointer  shadow-none! mb-3 rounded-xl!"
            >
              <FcGoogle size={22} className="mr-2" />
              Sign In with Google
            </Button>

            {/* Sign In with Facebook */}
            <Button
              block
              className="h-10! w-full! lg:h-12! bg-white! text-black! cursor-pointer  shadow-none! mb-3 rounded-xl!"
            >
              <FaFacebook size={20} className="mr-2 text-[#1877F2]" />
              Sign In with Facebook
            </Button>
          </Form>
        </div>
      </div>
      <p className="text-sm text-[#7E7E7E]">
        Don’t have an account?{" "}
        <Link href={"/auth/register"} className="text-[#A855F7] underline">
          {" "}
          Sign Up
        </Link>
      </p>
    </div>
  );
}
