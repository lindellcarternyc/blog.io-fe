import styled, { css } from 'styled-components'

const RootButtonStyles = css`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  text-decoration: none;
  text-transform: capitalize;

  &.dark {
    background-color: #1b1b1b;
    color: #fff;
  }

  &.grey {
    background: #a5a5a5;
  }
`

export const ButtonLink = styled.a`
  ${RootButtonStyles}
`

export const Button = styled.button`
  ${RootButtonStyles}
  outline: none;
  border: none;
  cursor: pointer;
`

export const LabelButton = styled.label`
  ${RootButtonStyles}
`