import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api'
import { MenubarModule } from 'primeng/menubar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenubarModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: ['']
        },        
        {
            label: 'Job Search',
            icon: 'pi pi-search', 
            routerLink: ['job-search']           
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            routerLink: ['contact']
        },
    ]
}

}
