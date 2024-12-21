import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ArrowUpRight, Mail, Lock } from 'lucide-react';
import Logo from "../assets/logo.svg";
import { signIn } from "../controllers/auth.controller";
import { isRestroUserAuthenticated } from "../helpers/AuthStatus";
import {
  getUserDetailsInLocalStorage,
  saveUserDetailsInLocalStorage,
} from "../helpers/UserDetails";
import { SCOPES } from "../config/scopes";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const restroAuthenticated = isRestroUserAuthenticated();
    if (restroAuthenticated) {
      const { role, scope } = getUserDetailsInLocalStorage();
      if (role == "superadmin") {
        navigate("/superadmin/dashboard/home", {
          replace: true,
        });
        return;
      }
      if (role == "admin") {
        navigate("/dashboard/home", {
          replace: true,
        });
        return;
      }
      const userScopes = scope.split(",");
      if (userScopes.includes(SCOPES.DASHBOARD)) {
        navigate("/dashboard/home", {
          replace: true,
        });
        return;
      } else {
        navigate("/dashboard/profile", {
          replace: true,
        });
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!username) {
      e.target.username.focus();
      toast.error("Please provide username!");
      return;
    }

    if (!password) {
      e.target.password.focus();
      toast.error("Please provide password!");
      return;
    }

    try {
      toast.loading("Please wait...");

      const res = await signIn(username, password);

      if (res.status == 200) {
        toast.dismiss();
        toast.success(res.data.message);

        const user = res.data.user;
        saveUserDetailsInLocalStorage(user);

        const { role, scope } = getUserDetailsInLocalStorage();
        if (role == "admin") {
          navigate("/dashboard/home", {
            replace: true,
          });
          return;
        }
        const userScopes = scope.split(",");
        if (userScopes.includes(SCOPES.DASHBOARD)) {
          navigate("/dashboard/home", {
            replace: true,
          });
          return;
        } else {
          navigate("/dashboard/profile", {
            replace: true,
          });
        }

        return;
      } else {
        const message = res.data.message;
        toast.dismiss();
        toast.error(message);
        return;
      }
    } catch (error) {
      console.error(error);
      const message = error?.response?.data?.message || "Something went wrong!";

      toast.dismiss();
      toast.error(message);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-restro-green/5 to-restro-green-dark/5">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-restro-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-restro-green-dark/10 rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 p-4">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left lg:max-w-md">
          <Link to="/" className="inline-block mb-8">
            <img src={Logo} alt="RestroPRO" className="h-12" />
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ravi de vous revoir !
          </h1>
          <p className="text-gray-600 text-lg">
            Connectez-vous pour accéder à votre espace et gérer votre établissement efficacement.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-restro-green/5 border border-restro-green/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Connexion</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="username"
                    name="username"
                    required
                    className="block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-restro-green/20 focus:border-restro-green transition-colors"
                    placeholder="votreemail@exemple.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-gray-700 font-medium" htmlFor="password">
                    Mot de passe
                  </label>
                  <Link 
                    to="/forgot-password"
                    className="text-sm text-restro-green hover:text-restro-green-dark transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-restro-green/20 focus:border-restro-green transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-restro-green hover:bg-restro-green-dark text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-restro-green/20 flex items-center justify-center gap-2 group"
              >
                Se connecter
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Pas encore de compte ?{" "}
                  <Link 
                    to="/register"
                    className="text-restro-green hover:text-restro-green-dark font-medium transition-colors"
                  >
                    Créer un compte
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
