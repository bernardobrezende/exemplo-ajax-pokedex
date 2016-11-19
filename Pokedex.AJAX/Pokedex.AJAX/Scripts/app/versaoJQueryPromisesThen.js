$(() => {
  $('#btn-novo-pokemon').click(() => {
    // enviar um pokemon para o servidor
    let novoPokemon = {
      Id: 37,
      Nome: 'Vulpix',
      UrlThumbnail: 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png'
    };
    $.post('/home/pokemons', novoPokemon)
      .done(() => {
        $.get('/home/detalhepokemon', { id: novoPokemon.Id })
          .done(htmlDetalhe => {
            console.log('htmlDetalhe', htmlDetalhe);
            let $li = $('<li>').html(htmlDetalhe);
            $ul.append($li);
          })
      }
    );
  });
  let $ul = $('#lista-pokemons');
  $.get('/home/pokemons')
    .then(response => {
      response.dados.forEach(pokemon => {
        $.get('/home/detalhepokemon', { id: pokemon.Id })
          .done(htmlDetalhe => {
            console.log('htmlDetalhe', htmlDetalhe);
            let $li = $('<li>').html(htmlDetalhe);
            $ul.append($li);
          })
      });
    }, error => {
      console.error('fail', error);
    })
    .always(() => {
      console.log('always');
    });
});