import React from 'react'
import PropTypes from 'prop-types'

import Image from '../Image'
import Container from '../Container'
import Typography from '../Typography'
import Button from '../Button'
import Paragraph from '../Paragraph'
import RankingUserContainer from '../RankingUserContainer'

import redBar from '../../images/redBar.png'
import blackCircle from '../../images/blackCircle.png'
import arrowRight from '../../images/arrowRight.png'
import user1 from '../../images/user1.jpeg'
import user2 from '../../images/user2.jpeg'
import user3 from '../../images/user3.jpeg'
import user4 from '../../images/user4.jpeg'

import classes from './styles.module.css'

export const Offer = (props) => {
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
        className={classes.iconRedBar}
        imageSRC={redBar}
        imageALT={'Red bar'}
      />
      <Image
        className={classes.iconBlackCircle}
        imageSRC={blackCircle}
        imageALT={'Black circle'}
      />

      <Container
        className={classes.flexWrapper}
      >
        <Container
          className={classes.chartContainer}
        >
          <Container
            className={classes.chartWrapper}
          >
            <Container
              className={classes.rankProjectWrapper}
            >
              <Container
                className={classes.rankContainer}
              >
                <Container
                  className={classes.textWrapper}
                >
                  <Typography>
                    RANK
                  </Typography>
                </Container>

                <Container
                  className={classes.wrapper}
                >

                  <Container
                    className={classes.starContainer}
                  >
                    <svg
                      className={classes.starIcon}
                      xmlns={'http://www.w3.org/2000/svg'}
                      viewBox={'0 0 15.484 14.808'}
                      width={15.484}
                      height={14.808}
                      {...props}
                    >
                      <path
                        d={'m8.49 1.512 1.746 3.538a.834.834 0 0 0 .628.456l3.905.567a.834.834 0 0 1 .463 1.427l-2.826 2.75a.834.834 0 0 0-.24.738l.667 3.889a.834.834 0 0 1-1.21.879l-3.492-1.835a.835.835 0 0 0-.776 0l-3.493 1.836a.834.834 0 0 1-1.21-.879l.667-3.889a.834.834 0 0 0-.24-.738L.253 7.5a.834.834 0 0 1 .462-1.426l3.905-.567a.834.834 0 0 0 .628-.456l1.747-3.539a.834.834 0 0 1 1.495 0Z'}
                        transform={'translate(-.001 -1.047)'}
                        style={{
                          fill: '#ffffff'
                        }}
                      />
                    </svg>
                  </Container>

                  <Container>
                    <Typography
                      className={classes.textStar}
                    >
                      307
                    </Typography>
                  </Container>

                </Container>

                <Typography
                  className={classes.text}
                >
                  You’re in top{' '}
                  <Typography
                    className={classes.text__green}
                  >
                    27%
                  </Typography>
                </Typography>
              </Container>

              <Container
                className={classes.projectContainer}
              >

              </Container>

            </Container>

            <Container
              className={classes.rankProjectWrapper}
            >
              <Container
                className={classes.rankContainer}
              >
                <Container
                  className={classes.textWrapper}
                >
                  <Typography>
                    PROJECTS
                  </Typography>
                </Container>

                <Container
                  className={classes.wrapper}
                >
                  <Container
                    className={classes.starContainer}
                  >
                    <svg
                      className={classes.chevronIconLeft}
                      xmlns={'http://www.w3.org/2000/svg'}
                      viewBox={'0 0 320 512'}
                    ><path d={'M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z'}/>
                    </svg>
                    <svg
                      className={classes.chevronIconRight}
                      xmlns={'http://www.w3.org/2000/svg'}
                      viewBox={'0 0 320 512'}
                    ><path d={'M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z'}/>
                    </svg>
                  </Container>

                  <Container>
                    <Typography
                      className={classes.textStar}
                    >
                      35
                    </Typography>
                  </Container>

                </Container>

                <Typography
                  className={classes.text}
                >
                  <Typography
                    className={classes.text__green}
                  >
                    10{' '}
                  </Typography>
                  in this month
                </Typography>
              </Container>

              <Container
                className={classes.projectContainer}
              >

              </Container>

            </Container>

          </Container>

          <hr
            className={classes.hr}
          />

          <Container
            className={classes.topWrapper}
          >
            <Container
              className={classes.topUsersContainer}
            >
              <Typography
                className={classes.topUsersText}
              >
                Top Users
              </Typography>
            </Container>

            <Container
              className={classes.topCatContainer}
            >
              <Typography
                className={classes.topCatText}
              >
                TOP CATEGORIES
              </Typography>
            </Container>

            <Container
              className={classes.topButtonContainer}
            >
              <Button
                className={classes.topButton}
                buttonLabel={'React'}
              />
              <Button
                className={classes.topButton}
                buttonLabel={'clojure'}
              />
            </Container>

            <Container
              className={classes.rankingsContainer}
            >
              <Container
                className={classes.rankings__textContainer}
              >
                <Container
                  className={classes.rankings__textLeft}
                >
                  <Typography
                    className={classes.rankings__text}
                  >
                    RANKINGS
                  </Typography>
                </Container>

                <Container
                  className={classes.rankings__textRight}
                >
                  <Typography
                    className={classes.rankings__textLeft}
                  >
                    This month
                  </Typography>
                  <Typography
                    className={classes.rankings__textRight}
                  >
                    All time
                  </Typography>
                </Container>
              </Container>

              <RankingUserContainer
                listNumber={'1.'}
                colorVariant={'light_blue'}
                imageSRC={user1}
                imageALT={'Random user no.1'}
                userName={'Torres John'}
                userCash={'10938.34'}
              />

              <RankingUserContainer
                listNumber={'2.'}
                colorVariant={'dark_yellow'}
                imageSRC={user2}
                imageALT={'Random user no.2'}
                userName={'Joen Belu'}
                userCash={'9087.10'}
              />
              <RankingUserContainer
                listNumber={'3.'}
                colorVariant={'light_orange'}
                imageSRC={user3}
                imageALT={'Random user no.3'}
                userName={'Evanesence Kin'}
                userCash={'6789.90'}
              />
              <RankingUserContainer
                listNumber={'4.'}
                colorVariant={'light_pink'}
                imageSRC={user4}
                imageALT={'Random user no.4'}
                userName={'Michael Ugyt'}
                userCash={'6009.00'}
              />

            </Container>

          </Container>

        </Container>

        <Container
          className={classes.textContainer}
        >
          <Container>
            <Typography
              className={classes.spanText}
            >
              Why do you need application like this?
            </Typography>

            <Paragraph
              className={classes.paragraph}
            >
              Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
            </Paragraph>

            <Typography
              className={classes.textSpan}
            >
              LEARN MORE
              <Typography>
                <img
                  className={classes.textImage}
                  src={arrowRight}
                  alt={'Long arrow pointing to the right'}
                />
              </Typography>
            </Typography>

          </Container>
        </Container>

      </Container>

    </div>
  )
}

Offer.propTypes = {
  className: PropTypes.string
}

export default Offer
