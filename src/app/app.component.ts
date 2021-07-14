import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[] = []

  addTask(name: string) {
    if (name === "") return;
    this.tasks.push({
      name: name,
      isDone: false
    });
  }

  removeTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}

type Task = {
  name: string;
  isDone: boolean;
}
