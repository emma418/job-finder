import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    standalone: true,
    imports: [PaginatorModule]
})
export class PaginatorComponent {
    @Input() first: number = 0;

    @Input() rows: number = 10;
    @Input() totalRecords: number = 0;

    @Output() pageChange = new EventEmitter<PageEvent>()

    onPageChange(event: PaginatorState) {
      console.log('Page change event:', event);
      this.pageChange.emit({
        first: event.first || 0,
        rows: event.rows || 10,
        page: event.page || 1,
        pageCount: event.pageCount || 1
    });
    }
}