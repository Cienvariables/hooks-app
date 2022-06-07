import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const UseEffectApiRequest = () => {
  //Definimos el array de posts
  let [posts, setPosts] = useState([]);
  //Queremos mostrar un loading mientras carga
  let [isLoading, setIsLoading] = useState(false);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    setIsLoading(true);//mostramos loading
    fetch('https://pablomagaz.com/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .finally(() => setIsLoading(false));//ocultamos el loading
  }, []); //El array vacío es el estado inicial y el effect no se volverá a ejecutar cuando su contenido cambie

  const loading = (isLoading) ? 'Loading...' : null;

  return (
    <fieldset>
      <h5 className={'color-' + theme.name}>Listado de la API</h5>
      <div>
        { loading }
        { posts.map((post, key) => (
          <div key={ key }>
            <p style={{ background: theme.background, color: theme.foreground }}>{ post.title }</p>
          </div>)
        )}
      </div>
    </fieldset>);
}

export default UseEffectApiRequest;
