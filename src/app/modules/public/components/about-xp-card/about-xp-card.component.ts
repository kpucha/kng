import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
declare var google: any;

@Component({
  selector: 'app-about-xp-card',
  templateUrl: './about-xp-card.component.html',
  styleUrls: ['./about-xp-card.component.scss'],
})
export class AboutXpCardComponent implements AfterViewInit {
  @ViewChild('pieChart') pieChart!: ElementRef;

  drawChart = () => {
    var data = google.visualization.arrayToDataTable([
      [
        'Genre',
        'Fantasy & Sci Fi',
        'Romance',
        'Mystery/Crime',
        'General',
        'Western',
        'Literature',
      ],
      [' ', 4, 4, 3, 2, 2, 3],
    ]);

    var options = {
      bars: 'horizontal', // Required for Material Bar Charts.
      backgroundColor: 'transparent',
      height: 70,
      legend: { position: 'none' },
      bar: { groupWidth: '100%' },
      isStacked: true,
      hAxis: {
        minValue: 0,
        maxValue: 100,
        ticks: [
          { v: 0, f: ' ' },
          { v: 100, f: ' ' },
        ],
        gridlines: {
          count: 0,
          color: 'transparent',
        },
        minorGridlines: {
          count: 0,
          color: 'transparent',
        },
        textPosition: 'none',
        textStyle: {
          color: 'transparent',
        },
      },
      vAxis: {
        viewWindowMode: 'pretty',
        baseline: 0,
        textPosition: 'none',
      },
      chartArea: {
        backgroundColor: 'transparent',
      },
    };

    const chart = new google.charts.Bar(this.pieChart.nativeElement);

    chart.draw(data, google.charts.Bar.convertOptions(options));
  };

  ngAfterViewInit() {
    google.charts.load('current', { packages: ['bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  faCoffee = faCoffee;
}
