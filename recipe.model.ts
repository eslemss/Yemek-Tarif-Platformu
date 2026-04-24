export interface Recipe {
    id?: number;
    name: string;
    categoryId: number; // string yerine number yaptık
    prepTime: number;   // string yerine number yaptık
    difficulty: string;
    servings: number;   // string yerine number yaptık
    category?: string;
    description?: string;
    imageUrl?: string;
    instructions: string[];
    ingredients: string[];
    authorId?: number;
}