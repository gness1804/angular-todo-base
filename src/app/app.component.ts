import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  tasks: Task[] = []

  addTask(name: string) {
    if (name === "") return;
    this.tasks.push({
      name: name,
      isDone: false
    });
  }

  removeTask(task: Task) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().pipe(
      filter(Boolean)
    ).subscribe(() => {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    });
  }

}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent { }

type Task = {
  name: string;
  isDone: boolean;
}
