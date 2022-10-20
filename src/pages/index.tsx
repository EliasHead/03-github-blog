import { HomeContainer, ProfileContainer } from '../styles/pages/home'

import Imagem from 'next/future/image'
import imgLogo from '../assets/terminal-solid1.svg'
import { Cover } from '../components/Cover'

export default function Home() {
  return (
    <HomeContainer>
      <Cover />
      <ProfileContainer>
        <Imagem src={imgLogo} alt=""/>
        <span>Cameron Williamson</span>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <div>eliashead</div>
      </ProfileContainer>
    </HomeContainer>
  )
} 
