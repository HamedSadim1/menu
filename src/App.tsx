import { useState } from "react";
import { IMENU } from "./types";
import { menuData } from "./data";

import "./App.css";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

/**
 * Retrieves the unique categories from the menuData array.
 * @returns {string[]} An array of unique categories.
 */
const UniqueCategories = [
  "all",
  ...new Set(menuData.map((item) => item.category)),
];

/**
 * The main component of the application.
 * Renders the menu section with categories and items.
 */
function App() {
  const [menuItem, setMenuItem] = useState<IMENU[]>(menuData);
  const [categories] = useState<string[]>(UniqueCategories);

  /**
   * Filters the menu items based on the selected category.
   * @param category - The category to filter by.
   */
  const filterItem = (category: string) => {
    if (category === "all") {
      setMenuItem(menuData);
      return;
    }
    const newItem = menuData.filter((item) => item.category === category);
    setMenuItem(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
