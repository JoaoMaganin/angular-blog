import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://miro.medium.com/v2/resize:fit:1400/1*SZ2JHPnt7UmgO_ZkSc6Ocg.png";
  contentTitle:string = "Minha noticia";
  contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam tenetur autem odio, alias fugit? Beatae repellendus illo commodi asperiores ab atque sed perferendis non. Consequatur ullam minus aut qui?";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

      this.setValuesToComponent(this.id);
    }

    setValuesToComponent(id:string | null) {
      const result = dataFake.filter(article => article.id.toString() == id)[0];

      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;

    }
  }
