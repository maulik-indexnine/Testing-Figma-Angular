import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-dash1',
  templateUrl: 'dash1.component.html',
  styleUrls: ['dash1.component.css'],
})
export class Dash1 {
  rawqv1e: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
