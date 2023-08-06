using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDestiny.Models
{
    public class City
    {
        public string Image {get; set;}
        public string Name {get; set;}
        public List<string> Attractions {get; set;}

        public City()
        {
            Attractions = new List<string>();
        }
    }
}
