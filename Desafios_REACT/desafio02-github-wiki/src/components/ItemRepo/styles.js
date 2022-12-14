import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 20px;
    }

    a {
        color: #aa33aa;
    }

    button.remover {
        color: #ff0000;
        background-color: #fafafa;
        border: 1px solid #fafafa;
        border-radius: 20px;
        margin-top: 20px;        
    
        height: 20px;
        width: 100px;
    
        &: hover {
            background-color: #fafafa90;
            cursor: pointer;
        }

    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`