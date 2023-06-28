import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  // [arrAssessmentTypeVA] = 'arrQuesListbyPage';
  @Input() data: any = [];
  @Input() section: string = '';
  mediaPath: string = '';
  constructor(private BackendService: BackendService) {}
  call_of_action() {}
  ngOnInit(): void {
    this.mediaPath = this.BackendService.mediaPath;
    console.log(this.data);
  }
  slideShowBig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
  };

  slideShowSmart = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
  };
}
