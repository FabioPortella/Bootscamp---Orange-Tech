//import { MdEmail, MdLock } from 'react-icons/md'; leftIcon={<MdEmail />}  leftIcon={<MdLock />}
import { useNavigate } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'


const Login = () => {
    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/feed')
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empesas mais desejadas.    
                </Title>

            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="E-mail"  />
                        <Input placeholder="Senha" type="password"  />
                        <Button title="Entrar" variant="secondary" onClick={handleClickSingIn} type="button" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
                
            </Column>
        </Container>
    </>)
} 

export { Login }