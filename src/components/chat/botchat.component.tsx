import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const BotChat = () =>
  // props: any
  {
    return (
      <div>
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8 border">
            <AvatarFallback>
              {/* {props.boticon === "" ? "BO" : props.boticon} */}
              BO
            </AvatarFallback>
          </Avatar>
          <div className="max-w-[75%] rounded-lg bg-muted p-3 text-sm">
            <p>
              {/* {props.botreply === "" ? "This is a Bot Response." : props.botreply} */}
              This is a Bot Response.
            </p>
            <div className="mt-2 text-xs text-muted-foreground">
              {/* {props.bottime === "" ? "12:00" : props.bottime} */}
              12:00
            </div>
          </div>
        </div>
      </div>
    );
  };

export default BotChat;
