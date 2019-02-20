import {Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {NgbdModalBasic} from "./modal-basic";
import {NgbModal, ModalDismissReasons, NgbTimepickerConfig, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from "rxjs/internal/Subject";

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};



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
  events: CalendarEvent[] = [];
  modalData: Object;

  refresh: Subject<any> = new Subject();

  clickedDate: Date;
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(private modalService: NgbModal, private config: NgbTimepickerConfig) {
    config.seconds = true;
    config.spinners = false;
  }

  dayClickedHandler(action: string, event) {
    this.clickedDate = event.day.date;
    this.modalData = { event , action };
    this.modalService.open(this.modalContent, { size: 'lg' }).result.then((result) => {
        console.log(`Closed with: ${result}`);


        this.events.push({
          start: this.clickedDate,
          title: `New event ${this.time}`,
          color: colors.red,
        });
        console.log(this.events);
        this.refresh.next();

    }, (reason) => {
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
    console.log(this.clickedDate);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
