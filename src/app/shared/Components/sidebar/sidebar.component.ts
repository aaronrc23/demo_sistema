import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
  }
}
