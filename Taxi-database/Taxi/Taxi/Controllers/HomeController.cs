using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Ocsp;
using System.Net.Mail;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Net;
using Taxi.Models;
using static System.Net.WebRequestMethods;
using Google.Protobuf.WellKnownTypes;
using System.Text;

namespace Taxi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly Taxi.Models.Utility ul;
        private readonly TaxiDbContext _context;
        public HomeController(TaxiDbContext context, IConfiguration configuration)
        {
            _context = context;
            ul = new Taxi.Models.Utility(configuration);
        }

        [HttpPost("Contact")]
        public IActionResult Contact([FromBody] Contact model)
        {
            if (ModelState.IsValid)
            {
                var contact = new Contact
                {
                    Phone = model.Phone,
                    Subject = model.Subject,
                    Message = model.Message
                };
                _context.Contacts.Add(contact);
                _context.SaveChanges();

                return Ok(new { success = true, message = "Contact saved successfully." });
            }
            return BadRequest(new { success = false, errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage) });
        }

        [HttpPost("Booking")]
        public async Task<IActionResult> Booking([FromBody] Booking model)
        {
            if (model == null)
            {
                return BadRequest("Invalid booking data.");
            }
            try
            {        
                _context.Bookings.Add(model);
                await _context.SaveChangesAsync();
                return Ok(model);
            }           
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        [HttpGet("GetBookedData")]
        public IActionResult GetBookedData()
        {
            try
            {
                var bookings = _context.Bookings.ToList();
                if (bookings.Count == 0)
                {
                    return NotFound("No bookings found.");
                }
                return Ok(bookings);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        //[HttpGet("GetBookedData")]
        //public IActionResult GetBookedData()
        //{
        //    try
        //    {
        //        // Retrieve the cookie
        //        var encodedEmail = Request.Cookies["xyzra"];
        //        if (string.IsNullOrEmpty(encodedEmail))
        //        {
        //            // If the cookie is missing, return unauthorized response
        //            return Unauthorized("User is not logged in. Please log in to continue.");
        //        }

        //        // Decode the cookie (Base64 decoding)
        //        string decodedEmail;
        //        try
        //        {
        //            byte[] data = Convert.FromBase64String(encodedEmail);
        //            decodedEmail = Encoding.UTF8.GetString(data);
        //        }
        //        catch (FormatException)
        //        {
        //            // If decoding fails, the cookie is invalid
        //            return Unauthorized("Invalid cookie. Please log in again.");
        //        }

        //        // (Optional) You can add additional checks, e.g., verifying if the email exists in the database
        //        var user = _context.Users.FirstOrDefault(u => u.Email == decodedEmail);
        //        if (user == null)
        //        {
        //            return Unauthorized("Invalid user. Please log in again.");
        //        }

        //        // Fetch the bookings
        //        var bookings = _context.Bookings.ToList();
        //        if (bookings.Count == 0)
        //        {
        //            return NotFound("No bookings found.");
        //        }

        //        return Ok(bookings);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"An error occurred: {ex.Message}");
        //    }
        //}


        [HttpPost("Signin")]
        public IActionResult Signin([FromBody] Signin model)
        {
            if (model == null || string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
            {
                return BadRequest(new { message = "Email and Password are required." });
            }

            var user = _context.Users
                .FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);

            if (user != null)
            {
               
                string encodedEmail = Convert.ToBase64String(Encoding.UTF8.GetBytes(model.Email));

              
                Response.Cookies.Append("xyzra", encodedEmail, new CookieOptions
                {
                    HttpOnly = true, // Prevent client-side access to the cookie
                    Secure = false, // Ensure the cookie is sent over HTTPS
                    Expires = DateTime.UtcNow.AddHours(24), // Set expiration for 24 hours
                    SameSite = SameSiteMode.Lax
                });

                return Ok(new { message = "Login successful", userId = user.UserId, roleId = user.RoleId });
            }
            else
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }
        }

        //public string DecodeBase64Email(string encodedEmail)
        //{
        //    try
        //    {
        //        byte[] data = Convert.FromBase64String(encodedEmail);
        //        return Encoding.UTF8.GetString(data);
        //    }
        //    catch (FormatException ex)
        //    {
        //        return ex.Message;
        //    }
        //}


        [HttpGet("Signout")]
        public IActionResult Signout()
        {
            Response.Cookies.Append("xyzra", "", new CookieOptions
            {
                HttpOnly = true, 
                Secure = true,   
                Expires = DateTime.UtcNow.AddDays(-1), 
                SameSite = SameSiteMode.Strict 
            });

            return Ok(new { message = "Successfully logged out." });
        }



        [Route("verifyemail/{email}")]
        [HttpPost]
        public ActionResult verifyemail(string email)
        {
           
                try
                {
                    if (email != null)
                    {
                    //var user = _context.Users.FirstOrDefault(u => u.Email == Email);
                    // if (user != null)
                    //{

                    //    Random random = new Random();
                    //    string value = random.Next(100001, 999999);
                    //    TempData["otp"] = value;
                    //    TempData["email"] = Email;
                    //    String from, pass, to, messageBody;

                    //    MailMessage message = new MailMessage();
                    //    to = Email;
                    //    from = "skillupbharat@gmail.com";
                    //    pass = "glticvbacsmmvjkb";
                    //    messageBody = "Your OTP is " + value;
                    //    message.To.Add(to);
                    //    message.From = new MailAddress(from);
                    //    message.Body = messageBody;
                    //    message.Subject = "Validation Code";
                    //    SmtpClient smtp = new SmtpClient("smtp.gmail.com");
                    //    smtp.EnableSsl = true;
                    //    smtp.Port = 587;
                    //    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    //    smtp.Credentials = new NetworkCredential(from, pass);
                    //    try
                    //    {
                    //        smtp.Send(message);

                    //        return Ok(value);
                    //    }
                    //    catch (Exception ex)
                    //    {
                    //        return BadRequest(new { message = ex.Message });
                    //    }
                    //}
                    //else
                    //{
                    //    return BadRequest(new { message = "Enter Valid Email and Password;" });
                    //}
                    string otp = "12345";
                    return Ok(new { otp });
                }
                    else
                    {
                        return BadRequest(new { message = "Please enter valid email !" });
                    }


                }
                catch (Exception ex)
                {

                    return BadRequest(new { message = ex.Message });
                }
            


           

        }

        [Route("VerifyOTP/{otp}/{actualotp}")]
        [HttpPost]
        public ActionResult VerifyOTP(string otp,string actualotp)
        {          
                if (actualotp == otp)
                {            
                    return Ok();
                }
                else
                {
                    return BadRequest(new { message = "Enter Valid OTP" });
                }         
        }

        [HttpPost("resetpassword/{email}/{password}")]
        public IActionResult resetpassword(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                return BadRequest(new { success = false, message = "Email and password cannot be empty." });
            }

            try
            {
                // Find the user by email
                var user = _context.Users.FirstOrDefault(u => u.Email == email);

                if (user == null)
                {
                    return NotFound(new { success = false, message = "User not found." });
                }

                // Update the user's password
                user.Password = password;

                // Save changes to the database
                _context.SaveChanges();

                return Ok(new { success = true, message = "Password updated successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = $"An error occurred: {ex.Message}" });
            }
        }

    }
}
