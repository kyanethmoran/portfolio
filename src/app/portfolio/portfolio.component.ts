import { Component, OnInit } from '@angular/core';
import { DemoProjectsService } from '../services/demo-projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projectsData: any[] = [];

  constructor(private projects: DemoProjectsService) {}

  ngOnInit(): void {
    this.projects.getProjects().subscribe((data) => {
      this.projectsData = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        };
      });
    });
  }
}
