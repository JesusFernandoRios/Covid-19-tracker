import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import numeral from 'numeral'

// options attribute for linegraph
const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius:0,
        },
    },
    mantainAspectRatio: false, 
    tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function(tooltipItem, data){
                return numeral(tooltipItem.value).format('+0,0')
            }
        }
    },
    scales: {
        xAxes:[
            {
                type:'time',
                time: {
                    format:'MM/DD/YY',
                    tooltipFormat:'ll'
                },
            },
        ],
        yAxes:[
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a")
                    }
                }
            }
        ]

    }
}

const buildChart = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }

        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

function LineGraph({casesType}) {

    const [data, setData] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(res => res.json())
            .then(data => {
                let chartData = buildChart(data, casesType)
                setData(chartData)
        })
        }

        fetchData();
        
    },[casesType])

    return (
        <div>
            {/* optional chaining to check if there is data avaliable first. */}
            {data?.length > 0 && (
                <Line
                data={{
                datasets:[
                    {
                        backgroundColor: "rbga(204, 16, 52, 0.5)",
                        borderColor:"#CC1034",
                        data: data
                    }
                ]
                }}
                options={options}
                />
            )}
            
        </div>
    )
}

export default LineGraph
