import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public dropdownOptions1: string[] = ['Option 1', 'Option 2', 'Option 3'];
  public dropdownOptions2: string[] = ['Option A', 'Option B', 'Option C'];
}
