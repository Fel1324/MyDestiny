using System.Text.Json;
using MyDestiny.Models;

namespace MyDestiny.Services;

public class DestinyService : IDestinyService
{
    private readonly IHttpContextAccessor _session;
    private readonly string attractionsFile = @"Data\attractions.json";
    private readonly string citiesFile = @"Data\cities.json";
    public DestinyService(IHttpContextAccessor session)
    {
        _session = session;
        PopulateSession();
    }

    public List<Attraction> GetAttractions()
    {
        PopulateSession();

        var attractions = JsonSerializer.Deserialize<List<Attraction>>
        (_session.HttpContext.Session.GetString("Attractions"));

        return attractions;
    }

    public List<City> GetCities()
    {
        PopulateSession();

        var cities = JsonSerializer.Deserialize<List<City>>
        (_session.HttpContext.Session.GetString("Cities"));

        return cities;
    }

    public Attraction GetAttraction(string Name)
    {
        var attractions = GetAttractions();

        return attractions.Where(p => p.Name == Name).FirstOrDefault();
    }

    public AttractionDto GetAttractionDto()
    {
        var attrac = new AttractionDto()
        {
            Attractions = GetAttractions(),
            Cities = GetCities()
        };

        return attrac;
    }

    public AttractionDetailsDto GetDetailedAttraction(string Name)
    {
        var attractions = GetAttractions().ToArray();
        var index = Array.IndexOf(attractions, attractions.Where(p => p.Name.Equals(Name)).FirstOrDefault());

        var attrac = new AttractionDetailsDto()
        {
            Current = attractions[index],
            Prior = index - 1 < 0 ? null : attractions[index - 1],
            Next = index + 1 >= attractions.Count() ? null : attractions[index + 1]
        };

        return attrac;
    }

    public City GetCity(string Name)
    {
        var cities = GetCities();

        return cities.Where(t => t.Name == Name).FirstOrDefault();
    }

    private void PopulateSession()
    {
        if(string.IsNullOrEmpty(_session.HttpContext.Session.GetString("Cities")))
        {
            _session.HttpContext.Session.SetString("Attractions", ReadArchive(attractionsFile));
            _session.HttpContext.Session.SetString("Cities", ReadArchive(citiesFile));
        }
    }

    private string ReadArchive(string filename)
    {
        using (StreamReader reader = new StreamReader(filename))
        {
            string data = reader.ReadToEnd();
            return data;
        }
    }
}
