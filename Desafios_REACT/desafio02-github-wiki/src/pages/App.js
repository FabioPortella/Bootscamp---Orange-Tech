import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles';

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container>
        <img src={gitLogo} width={72} height={72} alt="github logo"/>
        <Input />
        <ItemRepo />
    </Container>
  );
}

export default App;
