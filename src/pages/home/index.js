import { useState } from 'react'
import { Header } from "../../components/Header"
import background from '../../assets/background.png'
import './style.css'
import ItemList from "../../components/ItemList"
function App() {
  const[user, setUser] = useState('');
  const[currentUser, setCurrentUserUser] = useState(null);
  const[repos, setRepos] = useState(null);
  const handlerGetData = async () =>{
  const userData = await fetch(`https://api.github.com/users/${user}`)    
  const newUser = await userData.json();
  if(newUser.name){
    const {avatar_url, name,bio} = newUser
    setCurrentUserUser({avatar_url, name,bio})
    const reposData = await fetch(`https://api.github.com/users/${user}/repos`)    
  const newRepos = await userData.json();
  if(newRepos.length){
    
  }
  }
  
  }
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="backgroud app" />
        <div className="info">
          <div >
            <input name="usuario" value={user} onChange={event => setUser(event.target.value)}
              placeholder="@username" />
            <button onClick={handlerGetData}>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/84235617?v=4" className="profile" alt="foto de perfil" />
            <div>
              <h3> João Senha</h3>
              <span>
                @
              </span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4> Repositórios </h4>
            <ItemList title='Title1' description='Teste descrição' />
            <ItemList title='Title1' description='Teste descrição' />
            <ItemList title='Title1' description='Teste descrição' />
            <ItemList title='Title1' description='Teste descrição' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
