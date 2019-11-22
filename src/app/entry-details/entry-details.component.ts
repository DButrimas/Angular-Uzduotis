import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {EntryService} from '../entry.service';
import { Entry } from '../Entry';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
entry : Entry;

  constructor(private route: ActivatedRoute,
    private entryService: EntryService,
    private location : Location
    ) { }

  ngOnInit() {
    this.getEntry();
  }
  getEntry(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryService.getEntry(id).subscribe(entry => this.entry = entry);
  }

}
