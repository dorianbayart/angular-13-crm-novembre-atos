import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public prenomAlea : string = 'Choix aléa';
  constructor() { }

  ngOnInit(): void {
    const tabPrenom = ['Amal', 'Alexandre', 'Zied', 'Erwan', 'Thomas', 'Paul', 'Grégory', 'Dorian'];
    const nombreAlea = Math.floor(Math.random() * tabPrenom.length );

    this.prenomAlea = tabPrenom[nombreAlea];
    console.log(this.prenomAlea);
  }

}
