import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { XMLParser } from 'fast-xml-parser';

export interface IJob {
  company: string;
  title: string;
  description: string;
  region: string;
  apply_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {
  private url = 'https://devitjobs.uk/job_feed.xml';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<IJob[]> {
    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map(response => this.parseXML(response))
    );
  }

  private parseXML(data: string): IJob[] {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      textNodeName: "#text",
      parseAttributeValue: true,
    });

    const result = parser.parse(data);
    const jobItems = result.jobs.job;
    const jobs: IJob[] = jobItems.map((job: any) => ({
      company: job.company,
      title: job.title,
      description: job.description,
      region: job.region,
      apply_url: job.apply_url,
    }));

    return jobs;
  }
}


