using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Healthy.Dal.Repositories;
using Healthy.Models;

namespace Healthy.Dal.UnitOfWork
{
    public class EfUnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
        public EfUnitOfWork(DbContext context)
        {
            _context = context;

            Preferencias = new GenericEfRepository<Preferencias>(_context);
        }
        public IRepository<Preferencias> Preferencias { get; protected set; }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
