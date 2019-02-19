import {Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {NgbdModalBasic} from "./modal-basic";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  title = 'our magical calendar';
  viewDate: Date = new Date();
  events = [];

  clickedDate: Date;


  constructor(private modalService: NgbModal) {}

  dayClickedHandler(day) {
    this.clickedDate = day;
    this.modalService.open(this.modalContent, { size: 'lg' });
    console.log(day);
  }

}
