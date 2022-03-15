import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'
import Paragraph from '../Paragraph'
import Image from '../Image'

import greyCircles1 from '../../images/greyCircles1.png'
import greyCircles2 from '../../images/greyCircles2.png'

import classes from './styles.module.css'

export const WorkFlow = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

      <Image
        className={classes.image}
        imageSRC={greyCircles1}
        imageALT={'Grey circles background'}
      />
      <Image
        className={classes.image}
        imageSRC={greyCircles2}
        imageALT={'Grey circles background'}
      />

      <Container
        className={classes.workFlowContainer}
      >
        <Container
          className={classes.textContainer}
        >
          <Typography
            className={classes.text}
          >
            Seamless Team Workflow {`${'&'}`} Efficient Task Management
          </Typography>
          <Paragraph
            className={classes.paragraph}
          >
            Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
          </Paragraph>

          <Typography
            className={classes.learnText}
          >
            LEARN MORE
            <Typography>

            </Typography>
          </Typography>
        </Container>

        <Container
          className={classes.imageContainer}
        >
        </Container>
      </Container>

    </div>
  )
}

WorkFlow.propTypes = {
  className: PropTypes.string
}

export default WorkFlow
