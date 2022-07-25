import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  todo:FormGroup = new FormGroup({
    todoInput:new FormControl(null , [Validators.required])
  });
  filter:string='';
  todos:String[] = [];
  display:String[] = [];
  addTodo(todo:FormGroup):void{
    this.todos.push(todo.value.todoInput);
    this.display = this.todos;
    this.todo.reset();
  }
  completeTodo(completed:String):void{
    this.todos = this.todos.filter( todo => todo !== completed);
    this.display = this.todos;
    this.filter='';
    // this.display = this.display.filter( todo => todo !== completed);
  }

  filterHandler():void{
    if(this.filter){
      this.display = this.todos.filter( (todo:String) => todo.includes(this.filter) === true);
    }else{
      this.display = this.todos;
    }
  
  }
  constructor() { }
  


  ngOnInit(): void {
    this.display = this.todos;

  }

}
