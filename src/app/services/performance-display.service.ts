import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import { PerformanceDisplayComponent } from '../performance-display/performance-display.component';
import { ActivityConfig } from '../ActivityConfig';

@Injectable()
export class PerformanceDisplayService {

  constructor(private dialog: MatDialog) {
  }

  openDialog(order: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const currentActivityName = ActivityConfig[order - 1].name;
    const nextActivity = ActivityConfig[order].name;
    const nextActivityURL = ActivityConfig[order].url;
    const levels = ActivityConfig[order - 1].levels;
    const currActivityURL = ActivityConfig[order - 1].url;
    const nextActivityLevels = ActivityConfig[order].levels;
    dialogConfig.data = {currentActivityName, nextActivity, nextActivityURL, levels, currActivityURL, nextActivityLevels};
    dialogConfig.width = '500px';
    this.dialog.open(PerformanceDisplayComponent, dialogConfig);
  }
}

