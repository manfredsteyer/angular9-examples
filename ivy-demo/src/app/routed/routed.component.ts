import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routed-comic',
  templateUrl: './routed.component.html'
})
export class RoutedComponent implements OnInit {

  params: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }

}
