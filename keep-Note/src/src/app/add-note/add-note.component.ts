import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteServiceObj:NoteService) { }

  Note:Note={};

  addNoteFunction(){
    if(this.Note.title==null||this.Note.content==null){
      alert ("please write something to add a note")
    }else{this.noteServiceObj.addNote(this.Note).subscribe({
      next(x) {alert("data added")},
      error() {alert ("error")},          //this method is optional
      complete() {alert ("completed")}    //this method is optional
    })}
    
  }

  ngOnInit(): void {
  }

}
