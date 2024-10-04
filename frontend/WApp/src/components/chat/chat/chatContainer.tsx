import { Send } from 'lucide-react';
import { SectionHeader } from '../../sectionHeader';
import InputField from '../../InputField';
import MessageInput from './messageInput';
import MessageItem from './messageItem';
import InverseMessageItem from './inverseMessageItem';
import DayItem from './dayItem';

const ChatContainer = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='border-b border-b-secondary pl-3 pb-3 flex gap-3'>
      <img src="https://images.datacamp.com/image/upload/v1682076850/An_avian_AI_exits_its_cage_8d2b033144.png" alt="wal" className="w-14 h-14 rounded-full" />
        <SectionHeader header='Walyson' description='Software Developer' />
      </div>

      <div className="w-full h-full h-4/5 flex flex-col pb-52">
        <div className="flex-grow overflow-y-auto px-7 pt-10 flex flex-col gap-4 scroll-container">
    <MessageItem />
    <InverseMessageItem />
    <DayItem day='Hoje' />
    <MessageItem />
    <InverseMessageItem />
    <MessageItem />
    <InverseMessageItem />
    <DayItem day='Hoje' />
    <MessageItem />
    <InverseMessageItem />
    <MessageItem />
    <InverseMessageItem />
    <MessageItem />
    <InverseMessageItem />
    <MessageItem />
    <InverseMessageItem />
    <MessageItem />
    <InverseMessageItem />
        </div>
      </div>



      
      <div className="w-8/12 fixed bottom-0 px-7 items-center flex h-20 bg-card">
        <div className="flex items-center w-full px-4 border rounded-3xl bg-card">
          <MessageInput type='text' placeholder='Digite sua mensagem' />
          <button className="ml-3 text-primary">
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ChatContainer;
