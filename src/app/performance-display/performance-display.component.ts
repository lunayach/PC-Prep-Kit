import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LanguageService } from '../services/language.service';
import { ActivitySuccessObject } from './models/SuccessMessage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-performance-display',
  templateUrl: './performance-display.component.html',
  styleUrls: ['./performance-display.component.scss']
})
export class PerformanceDisplayComponent implements OnInit {
  public SuccessObject: ActivitySuccessObject;
  public language: any;
  public activityName: string;
  public nextActivityURL: string;
  public nextActivity: string;
  public currActivityURL: string;
  public nextLevels = [];

  @Output() infoPop = new EventEmitter<any>();


  constructor(private dialogRef: MatDialogRef<PerformanceDisplayComponent>, @Inject(MAT_DIALOG_DATA) data,
              private _languageService: LanguageService, public _router: Router) {
    this.SuccessObject = data;
  }

  ngOnInit() {
    this._languageService.loadLanguage().subscribe(response => {
      this.language = response.pcprepkit.common.performanceDisplay;
    });
    this.activityName = this.SuccessObject.currentActivityName;
    this.nextActivityURL = this.SuccessObject.nextActivityURL;
    this.nextActivity = this.SuccessObject.nextActivity;
    this.currActivityURL = this.SuccessObject.currActivityURL;
    for (let i = 2; i <= this.SuccessObject.levels; i++) {
      this.nextLevels.push(this.currActivityURL + '/' + i)
    }
  }

  close() {
    this.dialogRef.close();
  }
  goDashboard(): void {
    this._router.navigateByUrl('/');
    this.close();
  }
  goNextActivity(): void {
    this._router.navigateByUrl(this.nextActivityURL);
    this.close();
  }
}
