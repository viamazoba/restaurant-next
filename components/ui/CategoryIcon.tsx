import { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category
}

export const CategoryIcon = ({ category }: CategoryIconProps) => {

    return (
        <div>
            {category.name}
        </div>
    )
}