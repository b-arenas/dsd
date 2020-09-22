using Healthy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Healthy.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Bienvenido()
        {
            return View();
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

        //[HttpPost]
        public ActionResult Principal()
        {
            return View();
        }

        public ActionResult Compras()
        {
            return View();
        }

        public ActionResult Buttons()
        {
            return View();
        }

        public ActionResult Cards()
        {
            return View();
        }

        public ActionResult UtilitiesAnimation()
        {
            return View();
        }

        public ActionResult UtilitiesBorder()
        {
            return View();
        }

        public ActionResult UtilitiesColor()
        {
            ViewBag.Saludo = "HOLA!";
            return View();
        }

        public ActionResult UtilitiesOther()
        {
            return View();
        }

        public ActionResult Blank()
        {
            return View();
        }

        public ActionResult Avances()
        {
            return View();
        }

        public ActionResult Charts()
        {
            return View();
        }

        public ActionResult Tables()
        {
            return View();
        }

        public ActionResult Preferencias()
        {
            return View();
        }
    }
}