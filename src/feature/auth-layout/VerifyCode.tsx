"use client";
import React, { useRef, useState } from "react";
import { Form, Input, Button } from "antd";
import type { InputRef } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";

export default function VerifyCodeForm() {
  // Store refs for 6 InputRef objects (AntD structure)
  const inputsRef = useRef<(InputRef | null)[]>([]);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    // ✅ Allow numbers only
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-move
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // ✅ Submit handler — logs "123456"
  const handleSubmit = () => {
    const finalCode = code.join("");
    console.log("Verification code:", finalCode);
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <AuthLogo />

      <div className="text-center">
        <h3 className="section-title mb-2!">Verify Code</h3>
        <p className="text-sm text-[#7E7E7E]">
          Enter the 6-digit verification code sent to your email.
        </p>

        <div className="w-full pt-12 grow">
          <Form layout="vertical" onFinish={handleSubmit}>
            {/* 6 Digit Code Boxes */}
            <div className="flex justify-center gap-3 mb-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Input
                  key={index}
                  maxLength={1}
                  type="text"
                  inputMode="numeric"
                  className="custom-input text-center! w-12! h-12! text-lg!"
                  value={code[index]}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                />
              ))}
            </div>

            {/* Submit */}
            <Button
              htmlType="submit"
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]! to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Verify
            </Button>
          </Form>
        </div>
      </div>

      <p className="text-sm text-[#7E7E7E]">
        Didn’t receive a code?{" "}
        <button className="text-[#A855F7] underline cursor-pointer">
          Resend
        </button>
      </p>
    </div>
  );
}
