import React from "react";
import Link from "next/link";
import SignUpForm from "./signup.form";

const SignUpPage = () => {
  return (
    <main className="flex w-full">
      <div className="flex-1 min-h-screen">
        <div className="relative hidden h-full flex-col bg-muted p-10 dark:text-white lg:flex dark:border-r">
          <Link href="/">
            <div className="relative z-20 flex items-center text-lg font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              Tele FUNICULAR
            </div>
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The great doctors all got their education off dirt
                pavements and poverty - not marble floors and
                foundations.&rdquo;
              </p>
              <footer className="text-sm">
                - Martin H. Fischer (1879 - 1962).
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-screen w-full">
        <div className="flex min-h-screen w-full justify-center items-center">
          <SignUpForm />
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
