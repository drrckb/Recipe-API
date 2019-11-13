import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
	
	
  dietOptions: any[] = [
	{ name: "Vegetarian", value: "vegetarian" },
    { name: "Vegan", value: "vegan" },
    { name: "Peanut-free", value: "peanut-free" },
    { name: "Sugar-conscious", value: "sugar-conscious" },
    { name: "Low-Carb", value: "low-carb" }
  ];

	
	
  panelOpenState = false;
  accordionList: any;
 
  @ViewChild('accordion',{static:true}) Accordion: MatAccordion


  formatLabel(value:number) {
    if (value >= 2001) {
      return Math.round(value / 2001) + 'k';
    }

    return value;  
  }
	
	

  constructor(private search: SearchService, private router: Router) {
    this.accordionList = [
      {
        id:"panel-1",
        title:"Panel One",
        description:"Description One",
        isDisabled:false,
        isExpanded:false
      },{
        id:"panel-2",
        title:"Panel Two (Disabled)",
        description:"Description Two",
        isDisabled:true,
        isExpanded:false
      },{
        id:"panel-3",
        title:"Panel Three",
        description:"Description Three",
        isDisabled:false,
        isExpanded:true
      },
    ]
   }

  ngOnInit() {
  }

  searchRecipes(form) {
    this.search.setOptions(form.value);

    this.router.navigate(["recipe-results"]);
  }

  beforePanelClosed(panel){
    panel.isExpanded = false;
    console.log("Panel going to close!");
  }
  beforePanelOpened(panel){
    panel.isExpanded = true;
    console.log("Panel going to  open!");
  }
 
  afterPanelClosed(){
    console.log("Panel closed!");
  }
  afterPanelOpened(){
    console.log("Panel opened!");
  }
 
 
  closeAllPanels(){
    this.Accordion.closeAll();
  }
  openAllPanels(){
    this.Accordion.openAll();
  }

}
