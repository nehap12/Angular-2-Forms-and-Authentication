import { Component, OnInit } from '@angular/core';

export class User {
    Name: String;
    Username: String;
}


@Component({
    selector: 'template-form',
    styleUrls: ['./app/template/template-form.component.css'],
    templateUrl: './app/template/template-form.component.html'
})

export class TemplateFormComponent {

user: User;
submitted: Boolean = false;

ngOnInit() {
    this.user = {
        Name: '',
        Username: ''
    };
}

get diagnostic() {
    return JSON.stringify(this.user);
}


processForm() {
    this.submitted = true;
    console.log(this.user);
}

}