import { IMENU } from "../types";

interface MenuProps {
  items: IMENU[];
}
/**
 * Renders a menu component with a list of items.
 *
 * @param {MenuProps} props - The props object containing the items array.
 * @returns {JSX.Element} The rendered menu component.
 */
const Menu = ({ items }: MenuProps) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
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
      })}
    </div>
  );
};

export default Menu;
