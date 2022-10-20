import Imagem from 'next/future/image'
import imgLogo from '../../assets/terminal-solid1.svg'

import { CoverContainer, LogoContainer } from "./styles";

export function Cover() {
  return (
    <CoverContainer>
        <LogoContainer>
          <Imagem src={imgLogo} alt=""/>
          <span>GITHUB BLOG</span>
        </LogoContainer>
      </CoverContainer>
  )
}