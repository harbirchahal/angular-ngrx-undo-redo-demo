import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { history$ } from '../../store';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {
  readonly undoredo$ = history$;

  constructor() { }

  ngOnInit() {
  }

}
