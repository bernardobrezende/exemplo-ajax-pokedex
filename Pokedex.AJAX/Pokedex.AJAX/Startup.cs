using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Pokedex.AJAX.Startup))]
namespace Pokedex.AJAX
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
