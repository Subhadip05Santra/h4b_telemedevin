import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import PhoneIcon from "./phone.icon";
import VideoIcon from "./video.icon";

const ChatDetails = () => {
  return (
    <div className="flex h-14 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border">
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">Acme Inc</div>
          <div className="text-sm text-muted-foreground">Online</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <PhoneIcon className="h-5 w-5" />
          <span className="sr-only">Call</span>
        </Button>
        <Button variant="ghost" size="icon">
          <VideoIcon className="h-5 w-5" />
          <span className="sr-only">Video Call</span>
        </Button>
      </div>
    </div>
  );
};

export default ChatDetails;
