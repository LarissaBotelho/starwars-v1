import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'sw-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  planet: any;
  loading: boolean;
  category = 'planets';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getRandomPlanet();
  }

  getRandomPlanet() {
    this.loading = true;

    this.dataService.getPageData(this.category, 1).subscribe(data => {
      let planetsPerPage = data['results'].length;
      let randomPlanetPosition = Math.floor(Math.random() * data['count'] + 1);
      let randomIndex = randomPlanetPosition - 1;
      let positionAtPage =
        randomIndex -
        (Math.ceil(randomPlanetPosition / planetsPerPage) - 1) * planetsPerPage;
      let randomPlanetPage = Math.ceil(randomPlanetPosition / planetsPerPage);

      this.dataService
        .getPageData(this.category, randomPlanetPage)
        .subscribe(data => {
          this.planet = data['results'][positionAtPage];
          this.loading = false;
        });
    });
  }
}
