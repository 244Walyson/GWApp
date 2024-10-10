import { SectionHeader } from "@/components/sectionHeader";

type ChatHeaderProps = {
  name: string;
  description: string;
  imgUrl: string;
};

const ChatHeader = ({ name, description, imgUrl }: ChatHeaderProps) => {
  return (
    <div className="flex gap-3">
      <img src={imgUrl} alt={name} className="w-14 h-14 rounded-full" />
      <SectionHeader header={name} description={description} />
    </div>
  );
};

export default ChatHeader;
