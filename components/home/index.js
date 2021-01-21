import { Typography } from '@material-ui/core';

import {
  RootContainer,
  ContentContainer,
  StyledTypography
} from './styles';

export default function Home() {
  return (
    <RootContainer>
      <ContentContainer>
        <StyledTypography align="center" variant="h4">
          Solutions
        </StyledTypography>
        <Typography align="center" color="secondary">
          What is your problem? I can solve it. <br />
          Automation of manual processes, websites, <br />
          development of complex systems, etc.
        </Typography>
      </ContentContainer>
      <ContentContainer>
        <StyledTypography align="center" variant="h4">
          Quality<br />
        </StyledTypography>
        <Typography align="center" color="secondary">
          Expertise in development of solutions <br />
          with hight quality using the latest technologies  <br />
          and best practices.<br />
        </Typography>
      </ContentContainer>
    </RootContainer>
  )
}
