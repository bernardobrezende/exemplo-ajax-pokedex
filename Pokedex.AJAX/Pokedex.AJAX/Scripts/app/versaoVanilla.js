document.addEventListener('DOMContentLoaded', () => {
  let $ul = document.getElementById('lista-pokemons');
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/Home/Pokemons');
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let pokemons = JSON.parse(xhr.responseText);
        console.log('pokémons', pokemons);
        pokemons.dados.forEach(pokemon => {
          let $li = document.createElement('li');
          let $h4id = document.createElement('h4');
          $h4id.innerText = pokemon.Id;
          let $spanNome = document.createElement('span');
          $spanNome.innerText = pokemon.Nome;
          let $imgThumbnail = document.createElement('img');
          $imgThumbnail.src = pokemon.UrlThumbnail;
          $li.appendChild($h4id);
          $li.appendChild($spanNome);
          $li.appendChild($imgThumbnail);
          $ul.appendChild($li);
        });
      }
    }
  }
  console.log('depois de enviar a requisição');
});