import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calory-tracker',
  templateUrl: './calory-tracker.component.html',
  styleUrls: ['./calory-tracker.component.css']
})
export class CaloryTrackerComponent implements OnInit {

  show:boolean = false

  Name:string = ""
  Calory:string = ""
  Image:string = ""
  AddExtra:number = 0
  FoodList:any = []
  TotalFood:any = []
  constructor() { }

  ngOnInit(): void {

  }

  toggleShow(){
    this.show = true
  }

  onSubmit():void{
    this.show = false
    let d = {Name:this.Name,Calory:this.Calory,Image:this.Image}
    this.FoodList.push(d)
    this.Name = ""
    this.Calory = ""
    this.Image = ""
  }

  Add(n:String){
    let d = this.FoodList.filter((i: { Name: String; }) => i.Name === n)
    d = {...d[0],quantity:this.AddExtra}
    this.TotalFood.push(d)
  }
}
