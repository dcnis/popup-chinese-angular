import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  navigateTo(target: string){
    this.router.navigate([target]);
    this.sidenav.toggle();
  }
}
