using Healthy.Models;
using MySql.Data.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Healthy.WA.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class ApplicationDbContext : DbContext
    {
        public DbSet Transaccion
        {
            get;
            set;
        }
        public ApplicationDbContext(): base("DefaultConnection") //Connection string name write here  
    { }
    }
}