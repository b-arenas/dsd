using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Healthy.Models
{
    [Table("Preferencias")]
    public class Preferencias
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int code { get; set; }
        public string numero_celular { get; set; }
        public decimal peso { get; set; }
        public decimal talla { get; set; }
        public int edad { get; set; }
        public short sexo { get; set; }
        public short restricciones { get; set; }
        public short frecuencia_actividad { get; set; }
        public short objetivo { get; set; }
    }
}
