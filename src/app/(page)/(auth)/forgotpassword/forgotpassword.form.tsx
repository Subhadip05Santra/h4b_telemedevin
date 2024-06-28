"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import forgotPasswordFormSchema from "@/model/schema/password.schema";

const ForgotPasswordForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      emailAddress: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const [users, setUsers] = useState({
    email: "",
    newPassword: "",
  });

  const handleForgotPasswordSubmit = async (
    values: z.infer<typeof forgotPasswordFormSchema>
  ) => {
    users.email = values.emailAddress;
    users.newPassword = values.newPassword;
    console.log(users);

    try {
      // TODO: Write the proper code for the backend.
      const response = await axios.post("/api/user/forgotpassword", users);
      console.log("Password Changed success", response.data);
      toast({
        title: "Password Changed Successfully",
      });
      router.push("/login");
    } catch (error: any) {
      console.log("Password Changed failed", error.message);
      toast({
        variant: "destructive",
        title: "Password Changed Successfully",
        description: "Please use another email.",
      });
    }
  };

  return (
    <div className="flex flex-col text-left h-3/5 w-[320px] sm:w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Forgot Your Password?</CardTitle>
        <CardDescription>
          Enter your email and update your new password.
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col text-center px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForgotPasswordSubmit)}>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="py-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
