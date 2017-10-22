import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions:Question[];


  constructor() {
    /* this.questions = [
      {
        question:"What is your name",
        answer:"my name is John",
        hide: true
      },
      {
        question:"What is your age",
        answer:"my age is 50",
        hide: true
      },
      {
        question:"What is your favourite language",
        answer:"my favourite language is JS ",
        hide: true
      }
    ]; */
   }

   // Get Question from local storage
   getQuestions() {
    if (localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse (localStorage.getItem('questions'));
    }
     return this.questions;
   }
 
  // add Question to local storage
   addQuestion(question:Question){
     this.questions.unshift(question);

     // Init local variable
     let questions;

     if (localStorage.getItem('questions') === null){
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Re set local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
   }

  // remove Question from local storage
   removeQuestion(question:Question){
     for(let i =0; i<this.questions.length;i++){
        if (question == this.questions[i]){
          this.questions.splice(i,1);
          localStorage.setItem('questions', JSON.stringify(this.questions));
        }
     }
   }

}
