import { Component, OnInit } from '@angular/core';
import { DataExchangeService } from '../../service/data-exchange/data-exchange.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  counter: any = 0;

  constructor(private DEService:DataExchangeService) { }

  ngOnInit() {
    this.DEService.componentCounter.subscribe(counter => this.counter = counter)
  }

}
