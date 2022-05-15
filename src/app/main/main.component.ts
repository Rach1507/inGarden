import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 public categories!: ["Florets", "Succulents", "Air purifier"];
  public images!: ["https://unsplash.com/photos/62saZ_T5AP0","https://project-ingarden-images.s3.ap-south-1.amazonaws.com/5906653a-cf8c-4338-8d3c-8fb078be5ae0.webp","https://project-ingarden-images.s3.ap-south-1.amazonaws.com/raychan-FVNOrzYVyvw-unsplash.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

 

}
