import React from "react";
import SendIcon from "./send.icon";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const InputField = () => {
  return (
    <div className="sticky bg-background px-4 py-2">
      <div className="relative">
        <Textarea
          placeholder="Type your message..."
          className="min-h-[48px] w-full rounded-2xl border border-neutral-400 pr-16 shadow-sm"
        />
        <Button type="submit" size="icon" className="absolute right-3 top-3">
          <SendIcon className="h-5 w-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
};

export default InputField;
