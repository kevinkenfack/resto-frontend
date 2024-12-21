import React, { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Lock, ArrowLeft } from 'lucide-react';
import Logo from "../assets/logo.svg";
import { resetPassword } from "../controllers/auth.controller";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;

    if(!token) {
      toast.error("Requête invalide !");
      return;
    }
    
    if (!password) {
      e.target.password.focus();
      toast.error("Veuillez fournir un nouveau mot de passe !");
      return;
    }

    try {
      toast.loading("Veuillez patienter...");

      const res = await resetPassword(token, password);
      if(res.status == 200) {
        toast.dismiss();
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      const message = error?.response?.data?.message || "Une erreur est survenue. Réessayez plus tard !";
      toast.dismiss();
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-restro-green/5 to-restro-green-dark/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-restro-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-restro-green-dark/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="RestroPRO" className="h-10" />
          </Link>
          <Link 
            to="/login"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-restro-green transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la connexion
          </Link>
        </div>
      </header>

      <main className="relative flex items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-md px-4 sm:px-6">
          {/* Form Container */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
                Réinitialisation du mot de passe
              </span>
            </h1>
            <p className="text-gray-600">
              Entrez votre nouveau mot de passe ci-dessous
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Nouveau mot de passe
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
              className="w-full bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-restro-green/20 flex items-center justify-center gap-2 group"
            >
              Réinitialiser le mot de passe
              <Lock className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
