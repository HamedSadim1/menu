interface CategoriesProps {
  filterItem: (category: string) => void;
  categories: string[];
}

/**
 * Renders a list of categories as buttons.
 * @param {Object} props - The component props.
 * @param {function} props.filterItem - The function to filter items based on the selected category.
 * @param {string[]} props.categories - The list of categories to render as buttons.
 * @returns {JSX.Element} - The rendered component.
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
