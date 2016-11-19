using Pokedex.AJAX.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Pokedex.AJAX.Controllers
{
    public class HomeController : Controller
    {
        private Pokemons pokemons = new Pokemons();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DetalhePokemon(string id)
        {
            return PartialView("Detalhe", pokemons[id]);
        }

        [HttpPost]
        public JsonResult Pokemons(Pokemon pokemon)
        {
            pokemons.Adicionar(pokemon);
            Response.StatusCode = (int)HttpStatusCode.Created;
            return Json(new { id = pokemon.Id });
        }

        [HttpGet]
        public JsonResult Pokemons()
        {
            // simular lentidão
            System.Threading.Thread.Sleep(1500);
            // simular erro
            //var x = 0;
            //var resultado = 1 / x;
            return Json(new { dados = pokemons.Todos }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}