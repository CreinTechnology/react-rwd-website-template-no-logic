import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'
import Paragraph from '../Paragraph'
import TextField from '../TextField'
import Button from '../Button'
import Image from '../Image'

import usersChart1 from '../../images/usersChart1.png'
import usersChart2 from '../../images/usersChart2.png'
import rankChart3 from '../../images/rankChart3.png'
import rankChart4 from '../../images/rankChart4.png'

import classes from './styles.module.css'

export const Hero = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.wrapper}
      >

        <Container
          className={classes.textWrapper}
        >
          <Typography
            className={classes.textHeader}
          >
            Best{' '}
            <Typography
              className={classes.textHeader__bold}
            >
              Solution Provider {' '}
            </Typography>
            For Your{' '}
            <Typography
              className={classes.textHeader__bold}
            >
              Business.
            </Typography>
          </Typography>

          <Paragraph
            className={classes.textParagraph}
          >
            Vivamus ut arcu dignissim massa pulvinar scelerisque a in purus. Vivamus sit amet ex dui. In tortor massa, sollicitudin id ligula nec, vulputate viverra purus.
          </Paragraph>

          <TextField
            className={classes.formField}
            placeholder={'Name@company.com'}
          />
          <Button
            className={classes.formButton}
            buttonLabel={'Try for free'}
          />
        </Container>

        <Container
          className={classes.chartWrapper}
        >
          <Image
            className={classes.chart1}
            imageSRC={usersChart1}
            imageALT={'usersChart1'}
          />
          <Image
            className={classes.chart2}
            imageSRC={usersChart2}
            imageALT={'usersChart2'}
          />
          <Image
            className={classes.chart3}
            imageSRC={rankChart3}
            imageALT={'rankChart3'}
          />
          <Image
            className={classes.chart4}
            imageSRC={rankChart4}
            imageALT={'rankChart4'}
          />
        </Container>

      </Container>

    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string
}

export default Hero
