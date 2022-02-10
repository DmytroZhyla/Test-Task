import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup
  flag:boolean = true
  ETH:boolean  = false
  BNB:boolean  = true
  isShown:boolean = true;
  ngOnInit(){
  this.form = new FormGroup({
    TokenName: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ]),
    Symbol: new FormControl('',[
      Validators.required,
      Validators.minLength(3)]),
    MaximumTokenSupply: new FormControl('',[
      Validators.required,
      Validators.min(100),
      Validators.max(1000000)
    ]),
    Enthereum: new FormControl(this.ETH ),
    BinanceSmartChain: new FormControl(this.BNB),
    Supply:new FormControl(false),
    Company:new FormControl('My company')
  })
  }

  submit() {
    console.log('Form Submited',this.form)
    this.isShown = false
  }
  btnClick(){
   this.flag = true
    this.ETH = true
    this.BNB = false
  }
  btnClick1(){
    this.flag = false
    this.BNB = true
    this.ETH = false
  }
}

