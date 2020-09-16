using Healthy.Dal.Repositories;
using Healthy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Healthy.Dal
{
    public interface IUnitOfWork : IDisposable
    {
        // PersonRepository Persons { get; }

        IRepository<Preferencias> Preferencias { get; }
        void SaveChanges(); // Complete(), Flush();
    }
}
