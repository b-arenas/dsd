using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Healthy.Models
{
    public class User
    {
        public long code;
        public string email;
        public string password;
        public string name;
        public string lastname;
        public int role;

        public User(long code, string email, string password, string name, string lastname, int role)
        {
            this.code = code;
            this.email = email;
            this.password = password;
            this.name = name;
            this.lastname = lastname;
            this.role = role;
        }
    }
}