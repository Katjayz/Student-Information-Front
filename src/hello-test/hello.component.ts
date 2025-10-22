
import { Component, signal } from '@angular/core';
import { HelloService } from '../hello-test/hello.service';

//This is just a test to check on the backend connection. If connection is working as intended, an output should show up

@Component({
    selector: 'app-test',
    template: `
        <div id="output-backend">The output from the backend: {{message}}</div>
      `,
})

export class TestComponent {

    constructor ( private helloService: HelloService ) {}

  protected readonly title = signal('my-angular-app');

  message: string = '';
  ngOnInit() {
    this.helloService.getHello().subscribe(
      (res: string) => {
        this.message = res;
      },
      (err: string) => {
        this.message = 'error: ' + err
      }
    )
  }
}