using MyDestiny.Models;
namespace MyDestiny.Services;

public interface IDestinyService
{
    List<Attraction> GetAttractions();
    List<City> GetCities();
    Attraction GetAttraction(string Name);
    AttractionDto GetAttractionDto();
    AttractionDetailsDto GetDetailedAttraction(string Name);
    City GetCity(string Name);
    CityDto GetCityDto();
    CityDetailsDto GetDetailedCity(string Name);
}
