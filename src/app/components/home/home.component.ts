import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import * as fs from 'fs';
import * as storage from 'electron-json-storage';
import * as json2csv from 'json2csv';
import * as csvtojson from 'csvtojson';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning/ng-lightning';


import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private ref:ChangeDetectorRef, private electronService: ElectronService) {  
  }

  type: string = 'scoped';
  selectedTab: any = 'laundry';

  customers:Array<any> = [];
  search:any = {};

  cust: any = {
    name: "",
    tel: "",
    address: "",
    service: "",
    startDate: null,
    endDate: null,
    quantity: 1,
    amount: 0
  };

  services: any = ["Giặt sấy", "Giặt (mang về phơi)", "Hấp giầy", "Hấp áo dài"];

  opened: boolean = false;
  open(size?: string) {
    this.opened = !this.opened;
  }
  cancel() {
    this.opened = false;
  }
  save() {
    this.opened = false;
  }

  PicklistOpen: boolean = false;
  get pickLabel() {
    return this.cust.service || 'Chọn dịch vụ';
  }

  update(){
    this.customers.push(this.cust);
  }
}
