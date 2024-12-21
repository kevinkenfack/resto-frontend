import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ArrowUpRight, Mail, ArrowLeft } from 'lucide-react';
import Logo from "../assets/logo.svg";
import { forgotPassword } from "../controllers/auth.controller";

export default function ForgotPasswordPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    
    if (!username) {
      e.target.username.focus();
      toast.error("Please provide username!");
      return;
    }

    try {
      toast.loading("Please wait...");
      const res = await forgotPassword(username);

      if(res.status == 200) {
        toast.dismiss();
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      const message = error?.response?.data?.message || "Error processing your request, Please try later!";
      toast.dismiss();
      toast.error(message);
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
            Mot de passe oublié ?
          </h1>
          <p className="text-gray-600 text-lg">
            Pas de panique ! Entrez votre adresse email et nous vous enverrons les instructions pour réinitialiser votre mot de passe.
          </p>
        </div>

        {/* Right Side - Reset Form */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-restro-green/5 border border-restro-green/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Réinitialisation du mot de passe</h2>

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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-restro-green hover:bg-restro-green-dark text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-restro-green/20 flex items-center justify-center gap-2 group"
              >
                Envoyer les instructions
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* Back to Login Link */}
              <div className="text-center">
                <Link 
                  to="/login"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-restro-green transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Retour à la connexion
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
