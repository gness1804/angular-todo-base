import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Dialog } from './confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  tasks: Task[] = []

  addTask(name: string) {
    if (name === "") return;
    // TODO: add dialog here
    this.tasks.push({
      name,
      isDone: false
    });
  }

  removeTask(task: Task) {
    // confirm deletion
    const dialogRef = this.dialog.open(Dialog);
    dialogRef.afterClosed().subscribe(result => {
      console.info(`Dialog result: ${result}`);
      if (result) this.tasks.splice(this.tasks.indexOf(task), 1);
    });
  }

}

type Task = {
  name: string;
  isDone: boolean;
}
