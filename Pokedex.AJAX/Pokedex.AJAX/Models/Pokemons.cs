using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pokedex.AJAX.Models
{
    public class Pokemons
    {
        private static IList<Pokemon> POKEMONS =
            new List<Pokemon>
            {
                new Pokemon { Id = "004", Nome = "Charmander", UrlThumbnail = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" },
                new Pokemon { Id = "059", Nome = "Arcanine", UrlThumbnail = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png" },
                new Pokemon { Id = "132", Nome = "Ditto", UrlThumbnail = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png" }
            };

        public IEnumerable<Pokemon> Todos
        {
            get { return POKEMONS; }
        }

        public void Adicionar(Pokemon pokemon)
        {
            POKEMONS.Add(pokemon);
        }

        // var charmander = pokemons["004"];
        public Pokemon this[string id]
        {
            get { return POKEMONS.Single(_ => _.Id == id); }
        }
    }
}