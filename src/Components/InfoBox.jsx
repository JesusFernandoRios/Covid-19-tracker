import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './style/infobox.css'

export default function InfoBox({title , cases, total, ...props}) {
    return (
        <Card 
        onClick={props.onClick}
        className='infoBox'>
            <CardContent>
                <Typography className="infobox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className="infobox__cases">{cases}</h2>

                <Typography className="infobox__total" color="textSecondary">
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}
