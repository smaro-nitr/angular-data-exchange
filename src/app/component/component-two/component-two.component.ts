import { Component, OnInit } from '@angular/core';
import { DataExchangeService } from '../../service/data-exchange/data-exchange.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private DEService:DataExchangeService) { }

  ngOnInit() {
  }

  increaseCounter(){
    this.DEService.increaseCounter();
  }
}
