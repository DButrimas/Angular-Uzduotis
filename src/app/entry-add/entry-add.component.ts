import { Component, OnInit, TemplateRef, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Entry } from '../Entry';
import { NgForm } from '@angular/forms';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.css']
})
export class EntryAddComponent implements OnInit {

  modalRef: BsModalRef;
  entry : Entry = new Entry();
  constructor(private modalService: BsModalService, private entryService : EntryService) {}

  @Output() private entryAdded = new EventEmitter<Entry>();
  
  public sendEntry() {
    this.entryAdded.emit(this.entry);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit(form : NgForm) { 
    this.addEntry(this.entry);
    this.sendEntry();
    form.reset();
    this.modalRef.hide()
  }

  addEntry(entry : Entry){
    this.entryService.addEntry(entry).subscribe();
  }
  ngOnInit() {
  }


}
