import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/models/section';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  /**
   * SectionType Array. contains the titles of the section.
   * It will create the section on the screen.
   */
  sections: Section[] = [];

  ngOnInit() {
    this.sections = [{
      title: 'What went well'
    }, {
      title: 'What can be improved'
    }, {
      title: 'Start doing'
    }, {
      title: 'Action Items'
    }];
  }

}
