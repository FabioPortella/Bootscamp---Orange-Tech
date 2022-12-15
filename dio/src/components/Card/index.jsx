import React from 'react';
//import { FiThumbsUp } from 'react-icons/fi'; <FiThumbsUp /> 10

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src = "data:image/jpeg;base64,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
        ccO7GE4IMyOR59crd4g3hwAf//Z"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                <div>
                    <h4>Fábio Portella</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp Orange + ... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    icone FiThumbsUP - 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };