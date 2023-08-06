using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDestiny.Models
{
    public class CityDetailsDto
    {
        public City Prior {get; set;}
        public City Current {get; set;}
        public City Next {get; set;}
    }
}
