import { Component, Input, OnInit, VERSION } from '@angular/core';
import { Note } from '../model/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input()
  key?: Note;



  name = 'Angular ' + VERSION.major;

  title = 'mouse-hover';
  showImage: boolean;


  constructor() {
    this.showImage = false;
   }

  ngOnInit(): void {
  }
  showImg(hover: boolean) {
    this.showImage = hover;
  }

}
