import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'


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
                return numberal(tooltipItem.value).format('+0,0')
            }
        }
    }
}

function LineGraph() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then(res => res.json())
        .then(data => {

            console.log(data)
            const chartData = buildChart(data)
            setData(chartData)
        })
    },[])

    const buildChart = (data, casesType ='cases') => {

        const chartData = []

        let lastDataPoint;

        for(let date in data.cases) {
            if(lastDataPoint ){

                const newDataPoint = {
                    x: date,
                    y:data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint)
            }
            lastDataPoint =data[casesType][date];
        }

        return chartData;
    }
    return (
        <div>
            <Line
            data={{
                datasets:[
                    {
                        backgroundColor: "rbga(204, 16,52,0)",
                        borderColor:"#CC1034",
                        data: data
                    }
                ]
            }}
            options={options}
            />
        </div>
    )
}

export default LineGraph
