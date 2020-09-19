using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Healthy.WA.Models
{
    public class Transaccion
    {
        public int Id { get; set; }
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(50)]
        public string Name
        {
            get;
            set;
        }
    }
}