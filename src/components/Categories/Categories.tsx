/**
 * Props for the Categories component.
 */
export interface CategoriesProps {
  filterItem: (category: string) => void;
  categories: string[];
}

/**
 * Renders a list of categories as buttons.
 */
const Categories = ({ filterItem, categories }: CategoriesProps) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="filter-btn"
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
