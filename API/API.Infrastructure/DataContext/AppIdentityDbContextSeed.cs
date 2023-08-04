using API.Core.DbModels.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Infrastructure.DataContext
{
    public class AppIdentityDbContextSeed 
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Ugur",
                    Email = "ugurbozkurt@ugurbozkurt.com",
                    UserName = "ugurbozkurt@ugurbozkurt.com",
                    Address = new Address
                    {
                        FirstName = "Ugur",
                        LastName = "BOZKURT",
                        Street = "Izmir, Buca",
                        City = "Izmir",
                        State = "TR",
                        ZipCode = "35000"       
                    }
                };
                var result = await userManager.CreateAsync(user, "Pa$sw0r1.d");
            }
        }
    }
}
