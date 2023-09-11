import { Component } from '@angular/core';
import { ProjectInformation } from 'src/assets/interfaces/project-interface';
import { projectData } from 'src/assets/project-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Jae Min Seo';

  eventCards: ProjectInformation[] = projectData
}
