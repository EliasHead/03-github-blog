import { CoverContainer, HomeContainer, LogoContainer } from '../styles/pages/home'

import Imagem from 'next/future/image'
import imgLogo from '../assets/terminal-solid1.svg'

export default function Home() {
  return (
    <HomeContainer>
      <CoverContainer>
        <LogoContainer>
          <Imagem src={imgLogo} alt=""/>
          <span>GITHUB BLOG</span>
        </LogoContainer>
      </CoverContainer>
    </HomeContainer>
  )
} 
