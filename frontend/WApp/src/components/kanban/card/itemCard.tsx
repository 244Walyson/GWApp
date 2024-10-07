import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { Trash } from "lucide-react";

import { ICard } from "@/interface/card";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DeleteCard } from "./deleteCard";
import { EditCard } from "./editCard";

type ItemCardProps = {
  card: ICard;
};

export const ItemCard = ({ card }: ItemCardProps) => {
  
  const {
    setNodeRef,
    attributes,
    transition,
    listeners,
    transform,
    isDragging,
  } = useSortable({
    id: card.id,
    data: {
      type: "Card",
      card,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <li ref={setNodeRef} style={style}>
        <Card className=" min-h-[38px] p-2 opacity-30" />
      </li>
    );
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="list-none"
    >
      <Collapsible>
        <Card className="py-1 px-1 max-w-full min-h-fit overflow-hidden space-y-1.5">
          <CollapsibleTrigger asChild>
           <div className="flex items-center">
           <h4 className="font-medium text-base truncate w-full">
              {card.title}
            </h4>
            <div>
            <DeleteCard card={card} />
            </div>
           </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="max-w-full">              
              <EditCard card={card} action_callback={() => {}}/>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </li>
  );
};
