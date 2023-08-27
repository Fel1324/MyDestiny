using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyDestiny.Models;
using MyDestiny.Services;

namespace MyDestiny.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IDestinyService _destinyService;

    public HomeController(ILogger<HomeController> logger, IDestinyService destinyService)
    {
        _logger = logger;
        _destinyService = destinyService;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Attractions(string city)
    {
        var attractions = _destinyService.GetAttractionDto();
        ViewData["filter"] = string.IsNullOrEmpty(city) ? "all" : city;
        return View(attractions);
    }

    public IActionResult AttractionsDetails(string Name)
    {
        var attraction = _destinyService.GetDetailedAttraction(Name);
        return View(attraction);
    }

    public IActionResult About()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
