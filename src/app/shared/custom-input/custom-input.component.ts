import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('input') inputFielf;
  constructor() { }

  ngOnInit(): void {
    
  }

  valueChanges(value: string): void {
    this.onValueChange.emit(value)
  }

}
