using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.Data.SqlClient;
using taxi.Models;
using System;
using System.Collections.Generic;
using System.Web;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using Azure.Core;

namespace taxi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly taxi.Models.Utility ul;
        private readonly TaxiDbContext _context;
        public HomeController(TaxiDbContext context, IConfiguration configuration)
        {
            _context = context;
            ul = new taxi.Models.Utility(configuration);
        }

        [HttpPost("Contact")]
        public IActionResult Contact([FromBody] myContact model)
        {
            if (ModelState.IsValid)
            {
                var contact = new Contact
                {
                    UserId = model.UserId,
                    Subject = model.Subject,
                    Message = model.Message
                };

                _context.Contacts.Add(contact);
                _context.SaveChanges();

                return Ok(new { success = true, message = "Contact saved successfully." });
            }

            return BadRequest(new { success = false, errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage) });
        }


    }
}
