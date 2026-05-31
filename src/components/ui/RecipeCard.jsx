// Components
import Image from "next/image";

// Icons
import { ChefHat } from "lucide-react";
import Link from "next/link";

function RecipeCard({ id, img, title, category, area }) {
  return (
    <div className="recipe-card bg-white rounded-xl relative overflow-hidden shadow-md transition-shadow group hover:shadow-xl">
      <Link href={`/recipe/${id}`} title={title} className="block">
        <span className="absolute top-3 left-3 z-2 px-3 py-1 bg-theme text-white text-sm font-medium rounded-full">
          {category}
        </span>
        <div className="image-wrapper overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="text p-4">
          <h3 className="text-lg font-semibold text-sidebar-foreground line-clamp-2 mb-2 transition-colors group-hover:text-theme">
            {title}
          </h3>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            <ChefHat size={20} />
            {area} Cuisine
          </p>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
