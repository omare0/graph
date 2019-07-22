function generateChart(dataJSON) {

    Highcharts.theme = {
        colors: ['#235B4E', '#364681', '#168687']
    };

    Highcharts.setOptions(Highcharts.theme);

    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '90%', 
        },
        title: {
            text: 'Carbon emissions around the world (2014)'
        },
        credits: {
            enabled: false
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: true,
                    parentNodeLimit: true
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: dataJSON
    });

}