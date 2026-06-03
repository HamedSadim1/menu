import { useState } from "react";
import type { MenuItem } from "./types";
import { menuData, categories, CATEGORY_ALL } from "./data";
import { Categories, Menu, MenuTitle } from "./components";

/**
 * The main component of the application.
 * Renders the menu section with categories and items.
 */
function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData);

  /**
   * Filters the menu items based on the selected category.
   */
  const filterItem = (category: string) => {
    if (category === CATEGORY_ALL) {
      setMenuItems(menuData);
      return;
    }
    setMenuItems(menuData.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className="menu section">
        <MenuTitle />
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
