import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ArrowUpRight, Mail, Lock, Building2, ArrowLeft } from 'lucide-react';
import Logo from "../assets/logo.svg";
import { signUp } from "../controllers/auth.controller";
import { validateEmail } from "../utils/emailValidator";

export default function RegistrationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bizName = e.target.biz_name.value;
    const email = e.target.username.value;
    const password = e.target.password.value;

    if(!bizName) {
      toast.error("Please provide business name!");
      return;
    }

    if(!email) {
      toast.error("Please provide email!");
      return;
    }

    if(!password) {
      toast.error("Please provide password!");
      return;
    }

    if(!validateEmail(email)) {
      toast.error("Please provide valid email!");
      return;
    }

    try {
      toast.loading("Please wait...");

      const res = await signUp(bizName, email, password);
      toast.dismiss();
      if (res.status == 200) {
        toast.success(res.data.message);
        navigate("/login", {
          replace: true
        })
        return;
      } else {
        const message = res.data.message;
        toast.dismiss();
        toast.error(message);
        return;
      }
    } catch (error) {
      console.error(error);
      const message = error?.response?.data?.message || "We're getting issues while processing the request, try later!";

      toast.dismiss();
      toast.error(message);
      return;
    }
  }

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
            Commencez votre essai gratuit
          </h1>
          <p className="text-gray-600 text-lg">
            Rejoignez des milliers de restaurateurs qui font confiance à RestroPRO pour développer leur activité.
          </p>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-restro-green/5 border border-restro-green/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Créer un compte</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="biz_name">
                  Nom de l'établissement
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="biz_name"
                    name="biz_name"
                    required
                    className="block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-restro-green/20 focus:border-restro-green transition-colors"
                    placeholder="Le nom de votre restaurant"
                  />
                </div>
              </div>

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
                <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                  Mot de passe
                </label>
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
                Créer mon compte
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Déjà un compte ?{" "}
                  <Link 
                    to="/login"
                    className="text-restro-green hover:text-restro-green-dark font-medium transition-colors"
                  >
                    Se connecter
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Terms and Privacy */}
          <p className="text-center text-sm text-gray-500 mt-8">
            En créant un compte, vous acceptez nos{" "}
            <Link to="/terms" className="text-restro-green hover:text-restro-green-dark">
              Conditions d'utilisation
            </Link>{" "}
            et notre{" "}
            <Link to="/privacy" className="text-restro-green hover:text-restro-green-dark">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
