"use client";

import { useState } from "react";
import { Edit } from "lucide-react";

import { IBoard } from "@/interface/board";

import useBoards from "@/hooks/useBoards";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../../ui/textarea";
import { ICard } from "../../../interface/card";

type Props = {
  card: ICard;
  action_callback: CallableFunction;
};

export const EditCard = ({ card, action_callback }: Props) => {
  const {isEditing, setIsEditing} = useState<boolean>(false);
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore voluptate fuga quos incidunt eveniet aspernatur ullam earum laborum quae totam ducimus, explicabo perspiciatis maxime error cumque vel iste tenetur eaque nobis odio cum adipisci. Deleniti, tempora. Expedita exercitationem ut doloremque temporibus incidunt. Ea recusandae id at in velit quis delectus! ");


  return (
   <div className="">
    <Textarea className="border-none focus-visible:outline-none scroll-container max-h-[160px] min-h-[160px] resize-none"
    value={text}
    onChange={(e) => {setText(e.target.value)}}>           
    </Textarea>
   </div>
  );
};
