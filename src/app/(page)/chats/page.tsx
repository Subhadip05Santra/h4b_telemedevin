import { BotChat, UserChat } from "@/components";
import ChatDetails from "@/components/chat/chatdetails.components";
import InputField from "@/components/chat/inputfield.components";
import SideBar from "@/components/chat/sidebar.components";

const Chat = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <div className="hidden w-96 border-r bg-background md:block">
        <SideBar />
      </div>
      <div className="flex flex-1 flex-col">
        <ChatDetails />
        <div className="p-4 flex-1 overflow-auto">
          <BotChat />
          <UserChat />
        </div>
        <InputField />
      </div>
    </div>
  );
};

export default Chat;
