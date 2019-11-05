import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-boot';

    constructor(private router: Router){
      
    }

    list(){
      this.router.navigate(["listar"])
    }

    new(){
        this.router.navigate(["add"]);
    }
}
