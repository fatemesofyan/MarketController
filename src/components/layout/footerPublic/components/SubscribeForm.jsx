"use client";

import React, { useState } from "react";
import Input from "../../../ui/Input/input";
import Button from "../../../ui/Button/button";
import SocialLinks from "./SocialLinks";


export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
        <SocialLinks/>

      <div className="flex w-full max-w-md flex-col">
        <h2 className="text-sm font-semibold text-text-secondary">
          با ثبت ایمیل، از جدیدترین رویدادها باخبر شوید.
        </h2>

        <div className="relative mt-4 w-full">
          <Input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="pl-20 "
          />

          <Button
            variant="primary"
            shape="pill"
            type="submit"
            className="absolute left-2 top-1/2 -translate-y-1/2 px-5 py-2"
          >
            ثبت
          </Button>
        </div>
      </div>

    </div>
  );
}