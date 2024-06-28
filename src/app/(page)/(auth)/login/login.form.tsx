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
import logInFormSchema from "@/model/schema/login.schema";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof logInFormSchema>>({
    resolver: zodResolver(logInFormSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleLoginSubmit = async (values: z.infer<typeof logInFormSchema>) => {
    users.email = values.emailAddress;
    users.password = values.password;
    console.log(users);

    try {
      const response = await axios.post("/api/user/login", users);
      console.log("Login success", response.data);
      toast({
        title: "Login Successfully",
      });
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast({
        variant: "destructive",
        title: "Account Dose Not Exist",
      });
    }
  };

  return (
    <div className="flex flex-col text-left h-3/5 w-[320px] sm:w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>Login to your account to continue</CardDescription>
      </CardHeader>
      <div className="flex flex-col text-center px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                className="pt-2 text-xs text-gray-500"
                href="/forgotpassword"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="py-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
        <Link className="text-xs text-gray-500" href="/signup">
          New Here? Create an Account Here.
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
