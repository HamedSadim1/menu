import type { MenuItem } from "../../types";
import MenuItemCard from "../MenuItemCard";

/**
 * Props for the Menu component.
 */
export interface MenuProps {
  items: MenuItem[];
}

/**
 * Renders a menu component with a list of items.
 */
const Menu = ({ items }: MenuProps) => {
  return (
    <div className="section-center">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
