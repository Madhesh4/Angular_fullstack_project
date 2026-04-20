import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // This line below is the "magic" that clears the Hello page
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'my-auth-app';
}