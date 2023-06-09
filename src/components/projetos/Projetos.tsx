import { ContainerComponent, HorizontalLine, ImageContainer } from '@/styles/styles'
import Image from 'next/image'
import { ContainerLinks, ContainerProjetos } from './stayles'
import Borboleta from '../borboleta/Borboleta'


function Projetos() {
  return (
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/steps.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">PROJETOS</p>
        <HorizontalLine />
      </ImageContainer>

      <ContainerProjetos>
        <ContainerLinks>
          <Borboleta />
          <a href="#" className="a-projeto" target="_blank">Agenda Aniversariantes</a>
        </ContainerLinks>

        <ContainerLinks>
          <Borboleta />
          <a href="#" className="a-projeto" target="_blank">Calculadora 3D</a>
        </ContainerLinks>
      </ContainerProjetos>

    </ContainerComponent>
  )
}
export default Projetos