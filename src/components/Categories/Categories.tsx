/**
 * Props for the Categories component.
 */
export interface CategoriesProps {
  filterItem: (category: string) => void;
  categories: string[];
  activeCategory: string;
}

/**
 * Renders a list of categories as buttons with active state.
 */
const Categories = ({ filterItem, categories, activeCategory }: CategoriesProps) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={`filter-btn ${category === activeCategory ? "active" : ""}`}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
