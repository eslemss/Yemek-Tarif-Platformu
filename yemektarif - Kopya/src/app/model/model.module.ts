import { NgModule } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { RestService } from "./rest";
import { RecipeRepository } from "./recipe.repository";
// 1. Kategoriler için bunu da içeri alalım:
import { CategoryRepository } from "./category.repository"; 
import { AuthService } from "./auth.service";

@NgModule({
    imports: [], 
    providers: [
        RestService, 
        RecipeRepository, 
        CategoryRepository, // 2. Kategori deposunu buraya kaydettik
        provideHttpClient() , // 3. İŞTE BURASI: İnternet paketini listeye ekledik!
        AuthService
    ]
})
export class ModelModule { }