import { Link } from "react-router-dom";
import bannerImage from '../../assets/bannerImage.png';
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighLight } from './styles';


const Feed = () => {
    return (<>
        <Header />
        <Container>
            <Card />
            <UserInfo percentual={88}                   
                nome="Fábio Portella" 
                image="https://avatars.githubusercontent.com/u/45184516?v=4" />                
        </Container>
    </>)
} 

export { Feed }