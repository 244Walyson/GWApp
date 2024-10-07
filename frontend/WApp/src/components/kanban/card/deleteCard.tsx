"use client";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ICard } from "../../../interface/card";
import useCards from "../../../hooks/useCards";

type Props = {
  card: ICard;
};

export const DeleteCard = ({ card }: Props) => {
  const { removeCard } = useCards();

  return (
    <Button
      variant="destructive_ghost"
      size="sm"
      className="p-2 space-x-2 w-full h-full flex justify-start cursor-pointer"
      onClick={() => removeCard(card)}
    >
      <Trash size={15} />
    </Button>
  );
};
