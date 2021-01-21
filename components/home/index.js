import { Typography } from '@material-ui/core';

import {
  BrowserRootContainer,
  MobileRootContainer,
  MobileContentContainer,
  MobileContentBottomContainer,
  BrowserContentContainer,
  StyledTypography
} from './styles';

import MediaQuery from 'react-responsive';

export default function Home() {
  return (
    <>
      <MediaQuery minDeviceWidth={1080}>
        <BrowserRootContainer>
          <BrowserContentContainer>
            <StyledTypography align="center" variant="h4">
              Solutions
        </StyledTypography>
            <Typography align="center" color="secondary">
              What is your problem? I can solve it. <br />
          Automation of manual processes, websites, <br />
          development of complex systems, etc.
        </Typography>
          </BrowserContentContainer>
          <BrowserContentContainer>
            <StyledTypography align="center" variant="h4">
              Quality<br />
            </StyledTypography>
            <Typography align="center" color="secondary">
              Expertise in development of solutions <br />
          with hight quality using the latest technologies  <br />
          and best practices.<br />
            </Typography>
          </BrowserContentContainer>
        </BrowserRootContainer>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1080}>
        <MobileRootContainer>
          <MobileContentContainer>
            <StyledTypography align="center" variant="h4">
              Solutions
            </StyledTypography>
            <Typography align="center" color="secondary">
              What is your problem? I can solve it. <br />
              Automation of manual processes, websites, <br />
              development of complex systems, etc.
            </Typography>
          </MobileContentContainer>
          <MobileContentBottomContainer>
            <StyledTypography align="center" variant="h4">
              Quality<br />
            </StyledTypography>
            <Typography align="center" color="secondary">
              Expertise in development of solutions <br />
              with hight quality using the latest technologies  <br />
              and best practices.<br />
            </Typography>
          </MobileContentBottomContainer>
        </MobileRootContainer>
      </MediaQuery>
    </>
  )
}
