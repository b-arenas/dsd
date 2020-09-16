using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Healthy.Controllers
{
    public class ErrorController : Controller
    {
        // GET: PageNotFound
        public ActionResult PageNotFound()
        {
            return View();
        }

        // GET: NoAutorizado
        public ActionResult NoAutorizado()
        {
            return View();
        }
    }
}
