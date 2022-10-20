import { redirect } from 'next/dist/server/api-utils'
import { styled } from '..'



export const HomeContainer = styled('div', {
  width: '100%',
  height: '106rem',

  background: '$baseBackground'
})

export const CoverContainer = styled('div', {
  width: '90rem',
  height: '18.5rem',

  background: '$baseProfile',
  margin: 'auto'
})

export const LogoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',

  width: '9.25rem',
  height: '6.125rem',
  left: 'calc(50% - 148px/2)',
  top: '4rem',

  position: 'absolute',

  svg: {
    width: '2.8125rem',
    height: '2.5rem'
  },

  span: {
    fontFamily: 'Coda',
    fontWeight: 400,
    fontSize: '$6',
    lineHeight: '160%',

    color: '$blue',
  }

})