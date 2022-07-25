import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  stars = [1,2,3,4,5];
  hoverd:number = 0;
  selected:number=-1;
  select(item:number):void{
    console.log(item);
    this.hoverd = item;
  }
  unselect():void{
    this.hoverd = 0;
  }
  onclick(item:number):void{
    this.selected = item;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
