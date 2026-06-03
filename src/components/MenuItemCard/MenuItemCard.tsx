import type { MenuItem } from "../../types";

/**
 * Props for the MenuItemCard component.
 */
export interface MenuItemCardProps {
  item: MenuItem;
}

/**
 * Renders a single menu item card with image, title, price, and description.
 */
const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { title, img, desc, price } = item;
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItemCard;
