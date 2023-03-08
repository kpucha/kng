import { EventEmitter, Injectable, OnDestroy, Output } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable, Subject, takeUntil } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  small: boolean | undefined = undefined;
  med: boolean | undefined = undefined;
  big: boolean | undefined = undefined;
  @Output() isSmall: EventEmitter<boolean> = new EventEmitter();
  @Output() isMed: EventEmitter<boolean> = new EventEmitter();
  @Output() isBig: EventEmitter<boolean> = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeSize();
  }

  private observeSize(): void {
    console.log(this.breakpointObserver.observe(['(max-width: 1200px)']));
    this.breakpointObserver
      .observe(['(max-width: 1280px)'])
      .subscribe((result: BreakpointState) => {
        this.small = result.matches;
        this.isSmall.emit(result.matches);
      });
    this.breakpointObserver
      .observe(['(min-width: 1281px) and (max-width: 1980px)'])
      .subscribe((result: BreakpointState) => {
        this.med = result.matches;
        this.isMed.emit(result.matches);
      });
    this.breakpointObserver
      .observe(['(min-width: 1981px)'])
      .subscribe((result: BreakpointState) => {
        this.big = result.matches;
        this.isBig.emit(result.matches);
      });
  }
}
