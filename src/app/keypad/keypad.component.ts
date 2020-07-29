import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (this.finalRachana.length === 0 && this.line.length === 0) {
      this.line.push('॥ॐ॥');
    }
  }
  public line = [];//this is one line with 13 parts
  public finalRachana = [];//this is final rachana
  public swarmatra = '';//this is swaras in one matra
  public swarank = 2;//number of swaras in one matra; default is two;
  public swarankFix = '२';
  public taal = 'केरवा-१२०';//either kerva or khemta
  public ifKerva = true;
  // public ganank = 4;//number of gan
  public matrank = 16;//number of matras in a charan
  public matrankFix = '१६';
  public anuvadan = true;
  public charanType = 'अनुवादनसहित';

  //Write logic to dynamically capture the matra count and show metadata selections;
  captureMeta(it) {
    console.log("In captureMeta " + it);
    this.swarmatra = '';
    if (it === 'khemta') {
      this.taal = 'खेमटा-३६०';
      this.swarank = 3;
      this.ifKerva = false;
      //logic to disable Kerva numbers
    } else if (it === 'kerva') {
      this.taal = 'केरवा-१२०';
      this.ifKerva = true;
      // this.swarank = 3;
      //logic to disable Khemta numbers
    } else if (it === '8' || it === '16' || it === '32') {
      if (this.matrank > it)//matrank is decreasing so reverse counting; eg. this.matrank = 12 and it = 8 then reduce matrank to 8;
        this.matrank -= it;
      if (it === '8')
        this.matrankFix = '८';
      if (it === '16')
        this.matrankFix = '१६';
      if (it === '32')
        this.matrankFix = '३२';
      console.log(this.matrank + " matrank");
      // } else if (it === 'repeat') {
      //   this.anuvadan = true;
    } else if (it === 'intro'){
      this.charanType = 'प्रस्तावपद';
      this.anuvadan = false;
    }
     else if(it === 'bridge') {
      this.charanType = 'सेतुपद';
      this.anuvadan = false;
    } else if (it === '1' || it === '2' || it === '3' || it === '4') {
      console.log("In swarank ");
      this.swarank = it;
      if (it === '1')
        this.swarankFix = '१';
      if (it === '2')
        this.swarankFix = '२';
      if (it === '3')
        this.swarankFix = '३';
      if (it === '4')
        this.swarankFix = '४';
      this.swarmatra = '';
    } else {
      console.log('in else ');
    }
  }
  captureIt(it) {
    if (this.swarank > 0) {
      this.swarmatra += it;
      this.swarank--;
      console.log("swarmatra: " + this.swarmatra + " swarank: " + this.swarank + " matrank: " + this.matrank);
    } else {
      this.matrank--;
      this.line.push(this.swarmatra);
      this.swarmatra = '';
      this.swarmatra += it;
      if (this.line.length === 3 || this.line.length === 6 || this.line.length === 9 || this.line.length === 12) {
        if (this.matrank === 0) {
          if (this.anuvadan) {
            this.line.push(':॥');
          } else {
            this.line.push('॥');
            this.anuvadan = true;
          }
          this.finalRachana.push(this.line);
          this.line = ['॥'];
          this.matrank = 16;
        } else {
          this.line.push('।');
          if (this.line.length > 12) {
            this.finalRachana.push(this.line);
            this.line = ['।'];
          }
        }
      }
      this.swarank = 1;
      this.swarankFix = '२';
      if (this.taal === 'खेमटा-३६०') {
        this.swarank = 2;
        this.swarankFix = '३';
      }
    }
  }

  correct() {
  }
}
