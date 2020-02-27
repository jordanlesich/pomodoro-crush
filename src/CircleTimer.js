import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import sizes from './sizes'

const useStyles = makeStyles({
    root: {
      justifySelf: 'center',
      
      [sizes.up("sm")]: {
        width: '300px',
        height: 'auto',
      },
      [sizes.up("md")]: {
        width: '340px',
        height: 'auto',
      },
      [sizes.up("lg")]: {
        width: '420px',
        height: 'auto',
        gridRow: '3',
        gridColumn: '1',
        justifySelf: 'flex-end',
        marginRight: '4rem'
      },
      [sizes.up("xl")]: {
        width: '460px',
        marginRight: '4rem'
      }
      
    },
    circleBackground: {
        fill: 'none',
        stroke: '#24252c'
    },
    circleProgress: {
        stroke: props => props.color,
        strokeLinecap: 'round',
        strokeLinejoin: 'bevel',
        fill: 'none'
    },
    circleText: {
        fontWeight: '200',
        fontSize: props => props.fontSize,
        fill: props => props.color
    }
})



const CircleTimer = props => {

      const {innerText, sqSize, strokeWidth, } = props;
      const classes = useStyles(props)


      // SVG centers the stroke width on the radius, subtract out so circle fits in square
      const radius = (sqSize - strokeWidth) / 2;
      // Enclose cicle in a circumscribing square
      const viewBox = `0 0 ${sqSize} ${sqSize}`;
      // Arc length at 100% coverage is the circle circumference
      const dashArray = radius * Math.PI * 2;
      // Scale 100% coverage overlay with the actual percent
      const dashOffset = dashArray - dashArray * props.percentage / 100;
  
      return (
        <svg
            className={classes.root}
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}>
            <circle
              className={classes.circleBackground}
              cx={sqSize / 2}
              cy={sqSize / 2}
              r={radius}
              strokeWidth={`${strokeWidth}px`} />
            <circle
              className={classes.circleProgress}
              cx={sqSize / 2}
              cy={sqSize / 2}
              r={radius}
              strokeWidth={`${strokeWidth}px`}
              transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset
              }} />
            <text
              className={classes.circleText}
              x="50%"
              y="50%"
              dy=".3em"
              textAnchor="middle">
                  {innerText}
            </text>
        </svg>
      );
    
  }
  

  export default CircleTimer