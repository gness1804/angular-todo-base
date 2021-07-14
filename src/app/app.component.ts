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
      // this takes the result of the dialog button press, and halts the process if the response wasn't "true".
      // the commented code below does the same with just a little more code.
      filter(Boolean)
    ).subscribe(() => {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    });

    // dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    //   if (!confirmed) return;
    //   this.tasks.splice(this.tasks.indexOf(task), 1);
    // });
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
