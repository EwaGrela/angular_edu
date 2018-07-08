import { Component, OnInit } from '@angular/core';
import {Doctor} from '../doctor'
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  
  doctor: Doctor = {
    id: 123,
    name: "Ewa Nowak",
    specialty: "pediatrics"
  }

  constructor() { }

  ngOnInit() {
  }

}
