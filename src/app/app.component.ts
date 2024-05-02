import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedFeteaure:string;
  onNavigate(feature:string){
     this.loadedFeteaure=feature;
  }
}
