import { Component, OnInit } from '@angular/core';
import { OfflineServiceService } from '../offline-service.service';

@Component({
  selector: 'app-offlinepage',
  templateUrl: './offlinepage.component.html',
  styleUrls: ['./offlinepage.component.css']
})
export class OfflinepageComponent implements OnInit {

  isOnline: boolean;

  constructor(private offlineService: OfflineServiceService) { }

  ngOnInit() {
    this.offlineService.online$().subscribe(online => this.isOnline = online);
  }

}
