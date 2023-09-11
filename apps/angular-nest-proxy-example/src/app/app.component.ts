import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe, HttpClientModule],
  selector: 'angular-nest-proxy-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}
  data$ = this.httpClient.get('/api/foo');
}
