import type { MenuItem } from "../../types";

/**
 * Props for the MenuItemCard component.
 */
export interface MenuItemCardProps {
  item: MenuItem;
}

/**
 * Renders a single menu item card with image, title, price, category badge, and description.
 */
const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { title, img, desc, price, category } = item;
  return (
    <article className="menu-item">
      <div className="photo-wrapper">
        <img src={img} alt={title} className="photo" />
        <span className="category-badge">{category}</span>
      </div>
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price.toFixed(2)}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItemCard;
