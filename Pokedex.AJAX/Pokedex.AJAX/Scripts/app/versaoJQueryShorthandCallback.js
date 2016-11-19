$(() => {
  let $ul = $('#lista-pokemons');
  $.get('/home/pokemons',
    // success
    (response) => {
      console.log('response', response);
      response.dados.forEach(pokemon => {
        let $li = $('<li>');
        let $h4 = $('<h4>').text(pokemon.Id);
        let $span = $('<span>').text(pokemon.Nome);
        let $img = $('<img>').attr('src', pokemon.UrlThumbnail);
        $li.append($h4);
        $li.append($span);
        $li.append($img);
        $ul.append($li);
      });
    }
  );
});