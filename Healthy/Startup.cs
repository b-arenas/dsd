using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Healthy.Startup))]
namespace Healthy
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
