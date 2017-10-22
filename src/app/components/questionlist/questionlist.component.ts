import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questions:Question[];

  constructor(public dataService:DataService) { 
    

  }

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  addQuestion(question:Question){
    this.dataService.addQuestion(question);
  }
}
