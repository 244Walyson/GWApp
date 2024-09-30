import { INavbarItems } from "@/interface/navbarItems";
import { Link, useLocation } from "react-router-dom"; 

import { Button } from "@/components/ui/button";
import Tooltip from "@/components/tooltip";

export const NavbarItems = ({
  path,
  icon: Icon,
  text,
  filled,
}: INavbarItems) => {
  const location = useLocation();

  return (
    <li>
      <Tooltip text={text} side="right">
        <Button
          size="sm"
          asChild
          variant={location.pathname === path ? "default" : "ghost"}
          className="w-8 h-8 p-0.5"
        >
          <Link to={path}>
            <Icon fill={filled ? "#fff" : "none"} />
          </Link>
        </Button>
      </Tooltip>
    </li>
  );
};
