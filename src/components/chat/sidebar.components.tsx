import PlusIcon from "@/components/chat/plus.icon";
import { Button } from "@/components/ui/button";
import React from "react";
import ChatList from "./chat.list";

const SideBar = () => {
  return (
    <div>
      {/* TOP OF THE SIDE BAR */}
      <div className="flex h-14 items-center justify-between border-b px-4">
        <h2 className="text-lg font-semibold">Chats</h2>
        <Button variant="ghost" size="icon">
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only">New Chat</span>
        </Button>
      </div>
      <ChatList />
      <ChatList />
      <ChatList />
    </div>
  );
};

export default SideBar;
