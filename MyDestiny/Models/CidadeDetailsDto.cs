using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDestiny.Models
{
    public class CidadeDetailsDto
    {
        public Cidade Prior {get; set;}
        public Cidade Current {get; set;}
        public Cidade Next {get; set;}
    }
}