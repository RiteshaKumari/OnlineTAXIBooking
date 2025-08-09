using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Ocsp;
using System.Net.Mail;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Net;
using Taxi.Model;
using static System.Net.WebRequestMethods;
using Google.Protobuf.WellKnownTypes;
using System.Text;

namespace Taxi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly Utility ul;
        private readonly TaxiDbContext _context;
        public HomeController(TaxiDbContext context, IConfiguration configuration)
        {
            _context = context;
            ul = new Taxi.Model.Utility(configuration);
        }

        //public string EncodeToBase64UrlSafe(string plainText)
        //{
        //    var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
        //    string base64 = System.Convert.ToBase64String(plainTextBytes);
        //    return base64.Replace("+", "-").Replace("/", "_").TrimEnd('=');
        //}

        //public string DecodeFromBase64UrlSafe(string base64UrlSafe)
        //{
        //    try
        //    {
        //        string base64 = base64UrlSafe.Replace("-", "+").Replace("_", "/");
        //        switch (base64.Length % 4)
        //        {
        //            case 2: base64 += "=="; break;
        //            case 3: base64 += "="; break;
        //        }
        //        var base64EncodedBytes = System.Convert.FromBase64String(base64);
        //        return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        //    }
        //    catch (FormatException)
        //    {
        //        return "Invalid Base64 string";
        //    }
        //}

        [HttpPost("Contact")]
        public async Task<IActionResult> Contact([FromBody] Contact model)
        {
            if (ModelState.IsValid)
            {
                 _context.Contacts.Add(model);
                await _context.SaveChangesAsync();

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
        public ActionResult VerifyEmail(string email)
        {
            try
            {
                if (!string.IsNullOrEmpty(email))
                {
                    var user = _context.Users.FirstOrDefault(u => u.Email == email);
                    if (user != null)
                    {
                        Random random = new Random();
                        string value = random.Next(100001, 999999).ToString();

                        // When setting session values
                        HttpContext.Session.SetString("otp", value); // Set OTP value
                        HttpContext.Session.SetString("email", email); // Set email

                        // When retrieving session values
                        var otp1 = HttpContext.Session.GetString("otp");
                        var email1 = HttpContext.Session.GetString("email");

                        string from = "maa.b.eenterprises@gmail.com";
                        //string pass = "Maabe@%#1";
                        string pass = "edfzveazunoxvfwr";
                        string to = email;
                        string messageBody = "Your OTP is " + value;

                        MailMessage message = new MailMessage();
                        message.To.Add(to);
                        message.From = new MailAddress(from);
                        message.Body = messageBody;
                        message.Subject = "Validation Code";

                        SmtpClient smtp = new SmtpClient("smtp.gmail.com")
                        {
                            EnableSsl = true,
                            Port = 587,
                            DeliveryMethod = SmtpDeliveryMethod.Network,
                            Credentials = new NetworkCredential(from, pass)
                        };

                        try
                        {
                           // smtp.Send(message);
                            return Ok(value);
                        }
                        catch (Exception ex)
                        {
                            return BadRequest(new { message = ex.Message });
                        }
                    }
                    else
                    {
                        return BadRequest(new { message = "Enter Valid Email and Password;" });
                    }
                }
                else
                {
                    return BadRequest(new { message = "Please enter a valid email!" });
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
            var otp1 = HttpContext.Session.GetString("otp");
            var email = HttpContext.Session.GetString("email");
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
