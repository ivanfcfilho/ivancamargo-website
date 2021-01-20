import {
  RootContainer,
  LeftContainer,
  CenterContainer,
  RightContainer
} from './styles';

export default function Home() {
  return (
    <RootContainer>
      <LeftContainer>
        LEFT
      </LeftContainer>
      <CenterContainer>
        CENTER
      </CenterContainer>
      <RightContainer>
        RIGHT
      </RightContainer>
    </RootContainer>
  )
}