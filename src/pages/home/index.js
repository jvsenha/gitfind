import { useState } from 'react';
import { Header } from "../../components/Header";
import background from '../../assets/background.png';
import './style.css';
import ItemList from "../../components/ItemList";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const handleGetData = async () => {
   
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
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
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img src={currentUser.avatar_url} className="profile" alt="foto de perfil" />
                <div>
                  <h3 className="h3-perfil">{currentUser.name}</h3>
                  <span className="span-perfil">
                    @{currentUser.login}
                  </span>
                  <p className="p-perfil"> {currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}

          {repos?.length ? (
            <div>
            <h4> Repositórios </h4>
            {repos.map((repo) => (
              <ItemList key={repo} title={repo.name} description={repo.description} html_url={repo.html_url} />
            ))}
            </div>
          ) : null}
        </div>
      </div>

    </div>
  );
}

export default App;
