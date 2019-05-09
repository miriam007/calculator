import React, { Component } from 'react';
import Chart from 'chart.js';
//import classes from './LineGraph.module.css';

class Graph extends Component{
    chartRef= React.createRef();

    componentDidMount() {
        const myChartRef= this.chartRef.current.getContext('2d')

        new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        label: 'Amount of hours coded',
                        data: [5, 2, 5, 0, 0, 0, 0],
                        backgroundColor: [
                            ['red'],
                            ['orange'],
                            ['yellow'],
                        ]
                        
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes:[{
                        ticks: {
                            beginAtZero: true,
                        },
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                        gridLines: {
                            display: false,
                        }
                    }]
                }

            }
        });
    }
    render() {
        return(
            <div className='graphContainer'>
            <canvas
                id='myChart'
                ref={this.chartRef}
            /> 
            </div>
        )
    }
}

export default Graph;