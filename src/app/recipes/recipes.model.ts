export class Recipe{
  public name:string;
  public description:string;
  public imagePath:string;
  constructor(name:string,des:string,imagePath:string){
      this.description=des;
      this.name=name;
      this.imagePath=imagePath;
  }
}
