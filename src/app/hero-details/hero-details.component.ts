import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {Input} from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
	
	@Input() hero : Hero;
  constructor() { }

  ngOnInit() {
  }

}
