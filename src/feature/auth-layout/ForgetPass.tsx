"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgetPasswordForm() {
  const router = useRouter();
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log(values);
    router.push("/auth/verify-code");
  };
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />

      <div className="text-center">
        <h3 className="section-title ">Forget Password</h3>
        <p className="text-sm text-[#7E7E7E]">
          Submit your email to reset your account password.
        </p>

        <div className="w-full pt-12 grow text-start!">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
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

            {/* Submit */}
            <Button
              htmlType="submit"
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]!  to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <p className="text-sm text-[#7E7E7E]">
        Remember your password?{" "}
        <Link href="/auth/login" className="text-[#A855F7] underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
