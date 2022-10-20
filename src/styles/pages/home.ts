import { styled } from '..'

export const HomeContainer = styled('div', {
  width: '100%',
  height: '106rem',

  background: '$baseBackground'
})

export const ProfileContainer = styled('div', {
  width: '43.2rem',
  height: '13.25rem',
  left: 'calc(50% - 43.2rem/2)',
  top: '12rem',
  position: 'absolute',

  background: '$baseBackground',
  boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2);',
  borderRadius: '10px',

  img: {
    position: 'absolute',
    width: '7.4rem',
    height: '7.4rem',
    left: '2rem',

    top: '32px',
    background: 'red',
    borderRadius: '8px',
  },

  span: {
    position: 'absolute',
    width: '11.8rem',
    height: '1.55rem',
    left: '11rem',
    top: '2rem',

    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '130%',

    color: '$baseTitle',
    background: 'blue'
  },

  p: {
    position: 'absolute',
    width: '30.6rem',
    height: '2.6rem',
    left: '11rem',
    top: '79px',

    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '160%',

    color: '$baseText',
    background: 'Red',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',

    position: 'absolute',
    width: '19.65rem',
    height: '1.3rem',
    left: '11rem',
    top: '7.75rem',

    background: 'Yellow',

  }
})