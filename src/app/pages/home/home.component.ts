import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  arrContents: any = [];
  mediaPath: string = '';
  sliderCat1: string = 'slider';
  sliderCat2: string = 'review';

  constructor(
    private contentService: ContentService,
    private backendService: BackendService,
    private router: Router
  ) {}

  extract_service_details(serviceId: number) {
    this.router.navigate(['/services'], {
      queryParams: { service_id: serviceId },
    });
  }

  on_route_change(main_route: string, child_route: string) {
    if (child_route == 'NA') {
      this.router.navigate([main_route]);
    } else {
      this.router.navigate([main_route], {
        queryParams: { param: child_route },
      });
    }
  }

  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
    this.arrContents = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'home'
    )[0].data;
    console.log('Home :', this.arrContents);
  }
}
