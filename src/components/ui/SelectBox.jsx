// Icons
import { ChevronDown } from "lucide-react";

function SelectBox({ options: { type, optionsList } }) {
  return (
    <div className="select relative group">
      <select
        name="category"
        className="w-full h-12 px-4 border-2 border-sidebar-border rounded-lg focus:border-theme transition-colors appearance-none"
      >
        <option value="">Choose {type}</option>
        {optionsList.map((opt, i) => (
          <option
            key={type == "category" ? opt.idCategory : i}
            value={
              type == "category"
                ? opt.strCategory
                : opt.strArea || opt.strCountry
            }
          >
            {type == "category"
              ? opt.strCategory
              : opt.strArea || opt.strCountry}
          </option>
        ))}
      </select>
      <ChevronDown
        size={20}
        className="absolute right-4 top-[50%] translate-y-[-50%] pointer-events-none transition-all group-focus-within:text-theme group-focus-within:rotate-180"
      />
    </div>
  );
}

export default SelectBox;
