import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppFacade, undo, redo } from '../../store';

@Component({
  selector: 'undo-redo',
  templateUrl: './undo-redo.component.html',
  styleUrls: ['./undo-redo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UndoRedoComponent implements OnInit {
  readonly noUndo$ = this.facade.canUndo$.pipe(map(can => !can));
  readonly noRedo$ = this.facade.canRedo$.pipe(map(can => !can));

  @HostListener('window:keydown', ['$event'])
  keyDown(e: KeyboardEvent) {
    if (e.ctrlKey && e.code === 'KeyZ') {
      this.doUndo();
    } else if (e.ctrlKey && e.code === 'KeyY') {
      this.doRedo();
    }
  }

  constructor(readonly facade: AppFacade) { }

  ngOnInit() {
  }

  doUndo() {
    this.facade.dispatch(undo());
  }

  doRedo() {
    this.facade.dispatch(redo());
  }
}
