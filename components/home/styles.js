import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const BrowserRootContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const MobileRootContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BrowserContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MobileContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`

export const MobileContentBottomContainer = styled(MobileContentContainer)`
  margin-top: 3rem;
`

export const StyledTypography = styled(Typography)`
  line-height: 2.2em;
  font-family: "neosans regular", "Helvetica Neue", Helvetica, Arial, Sans-serif;
  letter-spacing: -0.03em;
  font-size: 3rem;
  padding-bottom: 10px;
`
