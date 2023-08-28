using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDestiny.Models
{
    public class Attraction
    {
        public List<string> Image {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}
        public string Localization {get; set;}
        public string CityFilter {get; set;}
        public string City {get; set;}
    
        public Attraction()
        {
            Image = new List<string>();
        }
    }
}
