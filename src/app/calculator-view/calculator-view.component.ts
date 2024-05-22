import { ViewChildren , Component, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})
export class CalculatorViewComponent {
  @ViewChildren('printElement') printElement!:ElementRef;
  // @ViewChild('printElement') printElement2!:ElementRef;
  // @ViewChild('printElement') printElement3!:ElementRef;
  // @ViewChild('printElement') printElement!:ElementRef;
  // @ViewChild('printElement') printElement!:ElementRef;
  // @ViewChild('printElement') printElement!:ElementRef;
  screen = '';

  printOnScreen(){
    this.screen = this.printElement.nativeElement.innerText;
    // this.screen = this.printNumberTwo.nativeElement.innerText;
    console.log(this.screen)
  }
}
