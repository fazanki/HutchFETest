import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {LogEntry} from '../../models/LogEntry';

@Component({
  selector: 'app-error-logs',
  templateUrl: './error-logs.component.html',
  styleUrls: ['./error-logs.component.css']
})
export class ErrorLogsComponent implements OnInit {
  errorLogEntries$: Observable<LogEntry[] | []>
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.errorLogEntries$ = this.store.pipe(select(fromStore.getUserErrors));
  }

}
