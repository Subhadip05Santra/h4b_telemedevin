import Link from 'next/link';
import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar';

const ChatList = () => {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50"
      prefetch={false}
    >
      <Avatar className="h-10 w-10 border">
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <div className="flex-1 overflow-hidden">
        <div className="font-medium truncate">Acme Inc</div>
        <div className="text-sm text-muted-foreground truncate">
          Hey, how's it going?
        </div>
      </div>
      <div className="text-xs text-muted-foreground">2h</div>
    </Link>
  );
}

export default ChatList