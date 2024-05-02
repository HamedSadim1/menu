/**
 * Represents a menu item.
 */
export interface IMENU {
  /**
   * The unique identifier of the menu item.
   */
  id: number;

  /**
   * The title of the menu item.
   */
  title: string;

  /**
   * The category of the menu item.
   */
  category: string;

  /**
   * The price of the menu item.
   */
  price: number;

  /**
   * The image URL of the menu item.
   */
  img: string;

  /**
   * The description of the menu item.
   */
  desc: string;
}
