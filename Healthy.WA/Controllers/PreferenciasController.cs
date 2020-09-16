using Healthy.Dal;
using Healthy.Dal.UnitOfWork;
using Healthy.Models;
using Healthy.WA.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Healthy.WA.Controllers
{
    public class PreferenciasController : ApiController
    {

        private IUnitOfWork db = new EfUnitOfWork(new HealthyDbContext());

        public IEnumerable<Preferencias> Get()
        {
            using (db)
            {
                return db.Preferencias.GetAll();
            }
        }

        // [HttpGet]
        public Preferencias Get(int id)
        {
            using (db)
            {
                return db.Preferencias.Get(id);
            }
        }

        // [HttpPost]
        public IHttpActionResult Post([FromBody] Preferencias preferencias)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Preferencias.Add(preferencias);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = preferencias.Id }, preferencias);
        }

        public IHttpActionResult Put([FromUri] int id, [FromBody] Preferencias person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.Id)
            {
                return BadRequest();
                // return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "person id doesn't match"); //, ex);
            }

            if (null == db.Preferencias.Get(id))
            {
                return NotFound();
                //return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                //    "Person with Id " + id.ToString() + " not found to update");
            }

            try
            {
                // Person personFromDb = db.Persons.Get(id);
                // personFromDb.Id = person.Id;
                // person.Name = person.Name;

                person.Id = id;
                db.Preferencias.Update(person);
                db.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        public IHttpActionResult Delete(int id)
        {
            Preferencias person = db.Preferencias.Get(id);
            if (person == null)
            {
                return NotFound();
            }
            db.Preferencias.Remove(person);
            db.SaveChanges();

            return Ok(person);
        }
    }
}
