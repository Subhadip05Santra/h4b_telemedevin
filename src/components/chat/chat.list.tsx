import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const ChatList = () =>
  // props: any
  {
    return (
      <Link
        href="#"
        className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50"
        prefetch={false}
      >
        <Avatar className="h-10 w-10 border">
          <AvatarFallback>
            {/* {props.chaticon === "" ? "AC" : props.chaticon} */}
            AC
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 overflow-hidden">
          <div className="font-medium truncate">
            {/* {props.chattitle === "" ? "Doctor Bot" : props.chattitle} */}
            Doctor Bot
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          {/* {props.chattime === "" ? "12:00" : props.chattime} */}
          12:00
        </div>
      </Link>
    );
  };

export default ChatList;
