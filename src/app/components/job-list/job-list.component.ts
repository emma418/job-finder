import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IJob } from '../../services/job-search.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { JobDetailComponent } from '../job-detail/job-detail.component';



@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DialogModule, JobDetailComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent  {
  @Input() query: string = 'developer';
  @Input() jobs: IJob[] = [];
  visible: boolean = false;
  selectedJob: IJob | null = null;
  @Input() totalRecords: number = 0;
  @Input() rows: number = 10;
  @Input() first: number = 0;
  @Output() pageChange = new EventEmitter<{ first: number; rows: number }>();

  

  showDialog(job: IJob): void {
    this.selectedJob = job;
    this.visible = true;
  }


  hideDialog(): void {
    this.visible = false;
  }


  stripHtmlTags(str: string): string {
    if (!str) {
      return '';
    }
    return str.replace(/<[^>]*>/g, '');
  }
}
