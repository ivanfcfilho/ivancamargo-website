import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  align-items: center;
`
export const StyledTypography = styled(Typography)`
  line-height: 2.2em;
  font-family: "neosans regular", "Helvetica Neue", Helvetica, Arial, Sans-serif;
  letter-spacing: -0.03em;
  font-size: 3rem;
`