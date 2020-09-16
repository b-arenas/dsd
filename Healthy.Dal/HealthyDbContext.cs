using Healthy.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Healthy.Dal
{
    public class HealthyDbContext : IdentityDbContext<User>
    {
        public HealthyDbContext()
            : base("HealthyConnection")
        {
        }

        public virtual IDbSet<Preferencias> Preferencias { get; set; }
    }
}
