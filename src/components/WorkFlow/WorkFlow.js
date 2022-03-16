import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'
import Paragraph from '../Paragraph'
import Image from '../Image'
import Button from '../Button'

import greyCircles1 from '../../images/greyCircles1.png'
import greyCircles2 from '../../images/greyCircles2.png'
import arrowRight from '../../images/arrowRight.png'
import slack from '../../images/slack.png'
import user1 from '../../images/user1.jpeg'

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
              <Image
                className={classes.arrowImage}
                imageSRC={arrowRight}
                imageALT={'Right arrow'}
              />

            </Typography>
          </Typography>
        </Container>

        <Container
          className={classes.imageContainer}
        >
          <Container
            className={classes.positionContainer}
          >

            <Container
              className={classes.slackChart}
            >
              <Container
                className={classes.slackChart__container}
              >
                <Image
                  className={classes.slackChart__image}
                  imageSRC={slack}
                />
              </Container>

              <Container
                className={classes.slackChart__container}
              >
                <Typography
                  className={classes.slackChart__header}
                >
                  Join the conversation on Slack
                </Typography>

              </Container>

              <Container
                className={classes.slackChart__container}
              >
                <Typography
                  className={classes.slackChart__paragraph}
                >
                  Stay up to date on the latest news and special programs that only take place within the slack channel.
                </Typography>
              </Container>

              <Container
                className={`${classes.slackChart__buttonCtn} ${classes.slackChart__container}`}
              >
                <Button
                  className={`${classes.button} ${classes.button_white}`}
                  buttonLabel={'REMIND LATER'}
                />
                <Button
                  className={`${classes.button} ${classes.button_red}`}
                  buttonLabel={'JOIN NOW'}
                />
              </Container>
            </Container>

            <Container
              className={classes.userChartBottom}
            >
              <Container
                className={`${classes.userChart__container} ${classes.justify__left}`}
              >
                <Image
                  className={classes.userChart__image}
                  imageSRC={user1}
                />
                <Container
                  className={`${classes.userChart__container} ${classes.justify__center} ${classes.column} ${classes.padding_top}`}
                >
                  <Typography
                    className={`${classes.userChart__text}`}
                  >
                    Alice Martin
                  </Typography>
                  <Typography>
                    5 hours ago
                  </Typography>
                </Container>
              </Container>

              <Container
                className={classes.userChart__container}
              >
                <Typography
                  className={classes.userChart__text}
                >
                  Design and develop a website for an educational platform focusing on the growth of children.
                </Typography>

              </Container>

              <hr className={classes.userChart__hr}/>

              <Container
                className={`${classes.userChart__container} ${classes.space}`}
              >
                <Container>
                  <Button
                    className={`${classes.userChart__button} ${classes.button_violet}`}
                    buttonLabel={'1.2 ETH'}
                  />
                  <Button
                    className={`${classes.userChart__button} ${classes.button_beige}`}
                    buttonLabel={'0.3 BTC'}
                  />
                </Container>

                <Container>
                  <Typography>
                    $460
                  </Typography>
                </Container>
              </Container>

            </Container>

          </Container>
        </Container>
      </Container>

    </div>
  )
}

WorkFlow.propTypes = {
  className: PropTypes.string
}

export default WorkFlow
