import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Post';
  // On crée un tableau contenant le champs des post
  post = [
    {
      title: 'Mon premier post',
      content: 'ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus augue, accumsan nec est eget, imperdiet congue augue. Duis eget arcu non',
      loveIts: 1,
      created_at: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content: 'ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus augue, accumsan nec est eget, imperdiet congue augue. Duis eget arcu non',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Encore un post',
      content: 'ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus augue, accumsan nec est eget, imperdiet congue augue. Duis eget arcu non',
      loveIts: null,
      created_at: new Date(),
    },
  ];

}
