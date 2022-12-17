import { useNavigate } from "react-router-dom";

import bannerImage from '../../assets/bannerImage.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighLight } from './styles'

// startar react = terminar -> npm start

const Home = () => {

    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais novadoras do mundo e encare seu novo 
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="COMEÇAR AGORA" variant="secondary" onClick={handleClickSingIn} />
            </div>
            <div>
                <img src={ bannerImage } alt="Imagem principal" />
            </div>
        </Container>
    </>)
} 

export { Home }