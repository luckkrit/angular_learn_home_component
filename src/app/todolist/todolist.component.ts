import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  tasks: string[];

  constructor() {
    this.tasks = [];
  }

  ngOnInit(): void {}

  addTask(task: string): void {
    this.tasks.push(task);
  }

  deleteTask(i: number): void {
    this.tasks.splice(i, 1);
  }
}
