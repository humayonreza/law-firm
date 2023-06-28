import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  arrNav: any = [];
  mediaPath: string = '';
  constructor(
    private contentService: ContentService,
    private BackendService: BackendService,
    private router: Router
  ) {}

  change_route(route: string) {
    this.router.navigate([route]);
    for (let i = 0; i < this.arrNav.length; i++) {
      this.arrNav[i].isActive = this.arrNav[i].route == route ? 1 : 0;
    }
    console.log('isActive : ', this.arrNav);
  }
  ngOnInit(): void {
    this.mediaPath = this.BackendService.mediaPath;
    this.arrNav = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'navbar'
    )[0].data[0].links;
    console.log(this.arrNav);
  }
}
