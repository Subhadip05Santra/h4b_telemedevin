import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const UserChat = () =>
  // props: any
  {
    return (
      <div className="flex items-start gap-3 justify-end">
        <div className="max-w-[75%] rounded-lg bg-primary p-3 text-sm text-primary-foreground">
          <p>
            {/* {props.userprompt === ""
            ? "This is a User Prompt."
            : props.userprompt} */}
            This is a User Prompt.
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            {/* {props.usertime === "" ? "12:00" : props.usertime} */}
            12:00
          </div>
        </div>
        <Avatar className="h-8 w-8 border">
          <AvatarFallback>
            {/* {props.usericon === "" ? "AC" : props.usericon} */}
            AC
          </AvatarFallback>
        </Avatar>
      </div>
    );
  };

export default UserChat;
