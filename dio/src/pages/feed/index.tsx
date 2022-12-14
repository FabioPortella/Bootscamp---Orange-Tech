import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighLight } from './styles';


const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Fedd</Title>
                <Card /> 
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={80} nome="Fábio Portella" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={27} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={35} nome="Haniel Sonego" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={57} nome="Carlos Costa" image="https://avatars.githubusercontent.com/u/45184516?v=4" /> 
                <UserInfo percentual={12} nome="João Pedro Ussem" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
            </Column>                                       
        </Container>
    </>)
} 

export { Feed }