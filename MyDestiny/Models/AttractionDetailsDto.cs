using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDestiny.Models
{
    public class AttractionDetailsDto
    {
        public Attraction Prior {get; set;}
        public Attraction Current {get; set;}
        public Attraction Next {get; set;}
    }
}
