import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar';

const UserChat = () => {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="max-w-[75%] rounded-lg bg-primary p-3 text-sm text-primary-foreground">
        <p>Pretty good, just working on a new project.</p>
        <div className="mt-2 text-xs text-muted-foreground">2:35 PM</div>
      </div>
      <Avatar className="h-8 w-8 border">
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default UserChat