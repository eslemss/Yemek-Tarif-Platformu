export class Category {
  constructor(
    public id?: any,
    public name?: string,
    public description?: string, // '?' ile opsiyonel yaptık
    public imageUrl?: string     
  ) {}
} 