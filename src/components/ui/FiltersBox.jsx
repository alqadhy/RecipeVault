// Components
import SelectBox from "./SelectBox";

function FiltersBox({ isShown, allCategories, allAreas }) {
  return (
    <div
      className={`filters bg-white mt-8 p-6 rounded-xl shadow-md ${!isShown && "hidden"}`}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="col">
          <span className="block text-sm font-medium text-sidebar-foreground mb-2">
            Category
          </span>
          <SelectBox
            options={{
              type: "category",
              optionsList: allCategories,
            }}
          />
        </div>
        <div className="col">
          <span className="block text-sm font-medium text-sidebar-foreground mb-2">
            Cuisine
          </span>
          <SelectBox
            options={{
              type: "cuisine",
              optionsList: allAreas,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FiltersBox;
