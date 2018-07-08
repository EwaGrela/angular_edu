import { Component, OnInit, Input } from '@angular/core';
import {Doctor} from '../doctor'

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
 @Input() doctor: Doctor;
  constructor() { }

  ngOnInit() {
  }

}
