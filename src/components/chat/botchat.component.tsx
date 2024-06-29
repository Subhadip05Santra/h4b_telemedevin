import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const BotChat = () => {
  return (
    <div>
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8 border">
          <AvatarFallback>BOT</AvatarFallback>
        </Avatar>
        <div className="max-w-[75%] rounded-lg bg-muted p-3 text-sm">
          <p>Hey, how's it going?</p>
          <div className="mt-2 text-xs text-muted-foreground">2:34 PM</div>
        </div>
      </div>
    </div>
  );
};

export default BotChat;
