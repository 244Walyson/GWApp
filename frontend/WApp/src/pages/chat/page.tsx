import { SectionHeader } from "../../components/sectionHeader";
import ChatContainer from "../../components/chat/chat/chatContainer";
import TeamContainer from "@/components/chat/chat/teamContainer";

const Chat = () => {
  return (
    <section className="h-full ">
      <div className="flex h-fit">
        <div className="h-full w-2/5 border-e border-e-secondary">
          <SectionHeader header="Chats" description="app" />
          <TeamContainer />
        </div>
        <ChatContainer />
      </div>
    </section>
  );
};

export default Chat;
