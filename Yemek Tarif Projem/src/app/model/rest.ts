import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Category } from './categories.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  // baseUrl sonunda "/" olduğu için aşağıda birleştirme yaparken dikkat etmeliyiz.
  baseUrl: string = "http://localhost:3000/"; 
  
  public static token: string | null = null; 

  constructor(private http: HttpClient) { }

  get token(): string | null {
    return RestService.token;
  }

  set token(value: string | null) {
    RestService.token = value;
  }

  // --- VERİ ÇEKME METOTLARI ---

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl + "recipes");
  }

  // id tipini any yaptık ki string ID'ler hata vermesin
  getRecipe(id: any): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}recipes/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + "categories");
  }

  getIngredients(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "ingredients");
  }

  // --- TARİF İŞLEMLERİ ---

  saveRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl + "recipes", recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}recipes/${recipe.id}`, recipe);
  }

  // id tipini any yaptık
  deleteRecipe(id: any): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.baseUrl}recipes/${id}`);
  }

  // --- KATEGORİ İŞLEMLERİ ---

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + "categories", category);
  }

  updateCategory(category: Category): Observable<Category> {
    // ID string ise Number() yapmadan olduğu gibi gönderiyoruz
    return this.http.put<Category>(`${this.baseUrl}categories/${category.id}`, category);
  }

  // 🚀 BURASI KRİTİK: baseUrl sonundaki "/" ile çakışmaması için "categories" başındaki "/" silindi.
  deleteCategory(id: any): Observable<Category> {
    return this.http.delete<Category>(`${this.baseUrl}categories/${id}`);
  }

  // --- KİMLİK DOĞRULAMA (AUTH) ---

  authentication(username: string, password: any): Observable<boolean> {
    return this.http.get<any[]>(this.baseUrl + "users").pipe(
      map(users => {
        const user = users.find(u => u.username === username && Number(u.password) === Number(password));

        if (user) {
          RestService.token = "auth-token-" + user.id;
          return true;
        }
        
        RestService.token = null;
        return false;
      }),
      catchError((err) => {
        console.error("Giriş işlemi başarısız!", err);
        return of(false);
      })
    );
  }
}