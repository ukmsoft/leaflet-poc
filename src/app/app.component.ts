import { Component } from '@angular/core';
import { tileLayer } from "leaflet";
declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Angular";
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { maxZoom: 30, minZoom: 12 }),
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  };
  layersControl: any;

  ngOnInit() {
    this.layersControl = {
      baseLayers: {
        "Topo Map": tileLayer(
          "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
          { maxZoom: 30, minZoom: 12 }
        ),
        Imagery: tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          { maxZoom: 30, minZoom: 12 }
        ),
        'Outdoors': tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { maxZoom: 30, minZoom: 12 }),
        None: tileLayer("", { maxZoom: 100, minZoom: 12 })
      }
    };
  }
}
