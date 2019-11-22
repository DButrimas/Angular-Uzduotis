import { Component, OnInit } from '@angular/core';
import {Entry} from '../Entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

entries: Entry[] = [];

  constructor(private entryService : EntryService) { }

  ngOnInit() {
    this.entryService.getEntries().subscribe(data => {
      this.entries = data;
    });
  }
  public onEntrySent(entry: Entry) {
    this.entries.push(entry);
  }
}
