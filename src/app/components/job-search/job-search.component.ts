import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobSearchService, IJob } from '../../services/job-search.service';
import { CommonModule } from '@angular/common';
import { JobListComponent } from '../job-list/job-list.component';


@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [FormsModule, CommonModule, JobListComponent],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css'
})
export class JobSearchComponent implements OnInit {
  searchQuery: string = '';
  allJobs: IJob[] = []
  jobs: IJob[] = [];

  
  constructor(private jobSearchService: JobSearchService) {}

  ngOnInit(): void {
    this.searchJobs();
  }


  searchJobs(): void {
    this.jobSearchService.getJobs().subscribe((data: IJob[]) => {
      this.allJobs = data;
      this.filterJobs();
    });
  }

  filterJobs(): void {
    if (this.searchQuery.trim() !== '') {
      this.jobs = this.allJobs.filter(job => 
        job.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        job.region.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.jobs = this.allJobs;
    }
  }

  onSearchQueryChange(): void {
    this.filterJobs();
  }
}


