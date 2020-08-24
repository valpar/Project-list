import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 Projects = [
    {name: 'Mayhem', description: 'we dont talk about project mayhem', deadline: '07.12.2020', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJAhxESA61FXhZxBGrY-CEtwKPrixeGyK0_nNK47jSLw&usqp=CAU&ec=45690269', active: true},
    {name: 'Batman', description: 'Batman exo suit', deadline: '01.05.2036', picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Batarmor_%28Batman_v_Superman_-_Dawn_of_Justice%29.png/150px-Batarmor_%28Batman_v_Superman_-_Dawn_of_Justice%29.png', active: true },
    {name: 'Bigfoot', description: 'Bigfoot hair shampoo', deadline: '09.07.2022', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-ZWJrTStp1qWYTcWd1_ij18TtdGtcWT3Oec8_dbqgtw&usqp=CAU&ec=45690269', active: true },
    {name: 'Mercury', description: 'New space rocket', deadline: '11.12.2050', picture: 'https://cdn.vox-cdn.com/thumbor/Uw-raCMwmycwC2RcZVh2RMUpHV8=/0x0:888x501/1200x800/filters:focal(373x180:515x322)/cdn.vox-cdn.com/uploads/chorus_image/image/61438811/Screen_Shot_2018_09_17_at_9.21.53_PM.0.png', active: true },
    {name: 'Hornets', description: 'New football team in Tartu', deadline: '01.01.2021', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSw8gmNG1d_L0xwYBGw8P9tTj4i3PoVnaky9qI3BZwX_A&usqp=CAU&ec=45690269', active: true }
]
  
  constructor() { }

  getProjects() {
    return this.Projects.slice();
  }
    
  getProject(i:number) {
    return this.Projects[i];  
  }
  
  updateProject(project, i) {
    this.Projects[i] = project;
 }

}


