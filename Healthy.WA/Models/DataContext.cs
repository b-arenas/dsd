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
    public class DataContext : DbContext
    {
        public DataContext()
            : base("DefaultConnection")
        {
            Configuration.ValidateOnSaveEnabled = false;
        }

        //Your model classes should be added as DbSets
        public DbSet<Preferencias> Preferencias { get; set; }
    }
}