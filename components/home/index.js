import { Typography } from '@material-ui/core';

import {
  RootContainer,
  ContentContainer,
  CenterContainer
} from './styles';

export default function Home() {
  return (
    <RootContainer>
      <ContentContainer>
        <Typography variant="h4">
          Problem Solver
        </Typography>
        <Typography color="secondary">
          What is your problem? I can solve it.
        </Typography>
      </ContentContainer>
      <CenterContainer>

      </CenterContainer>
      <ContentContainer>
        <Typography variant="h4">
          Quality & Productivity
        </Typography>
        <Typography color="secondary">
          Expertise in develop solutions quickly with Quality.
        </Typography>
      </ContentContainer>
    </RootContainer>
  )
}
