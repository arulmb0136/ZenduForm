import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit():void{
    this.addMarker()
  }
  changeB(bl:any){
    this.primary = bl;
  }
  markers:any=[];
  title = 'ZenduForm';
  menuItems = [{ name: "Forms", active: "inactive" , svg:"assets/Vector (6).svg"},
  { name: "Customers", active: "inactive" , svg:"assets/Vector (5).svg" },
  { name: "Submissions", active: "active" , svg:"assets/Vector (1).svg" },
  { name: "History", active: "inactive"  , svg:"assets/Vector.svg"},
  { name: "Workflow", active: "inactive" , svg:"assets/Vector (1).svg" },
  { name: "Reports", active: "inactive" , svg:"assets/Vector (2).svg" },
  ]
  buttons=['Map','List'];
  primary= true;
  Data = [
    {
      'WorkFlow':"Required Location",
      'From': "denisgordiyenya@gmail.com",
      'To':"denisgordiyenya@gmail.com",
      'DueDate':'06 December',
      'Status':'Uncomplete',
    },
    {
      'WorkFlow':"Required Location",
      'From': "denisgordiyenya@gmail.com",
      'To':"denisgordiyenya@gmail.com",
      'DueDate':'06 December',
      'Status':'Low Risk',
    },
    {
      'WorkFlow':"Required Location",
      'From': "denisgordiyenya@gmail.com",
      'To':"denisgordiyenya@gmail.com",
      'DueDate':'06 December',
      'Status':'Uncomplete',
    },
    {
      'WorkFlow':"Required Location",
      'From': "denisgordiyenya@gmail.com",
      'To':"denisgordiyenya@gmail.com",
      'DueDate':'06 December',
      'Status':'Needs Review',
    }
  ]
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }
}
