import { useState } from "react";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import WalletInfo from "../components/WalletInfo";

export default function CredentialPage() {
  const [selectedPage, setSelectedPage] = useState<"login" | "register">("login");

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-[#05030b] via-[#1b102b] to-[#402455] px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg bg-white/5">
        <WalletInfo />
        <div className="p-8 md:p-12 bg-black/40 text-white">
          <div className="flex justify-center gap-6 mb-8">
            <button
              onClick={() => setSelectedPage("login")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedPage === "login"
                  ? "bg-green-500 text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setSelectedPage("register")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedPage === "register"
                  ? "bg-green-500 text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Register
            </button>
          </div>

          <h2 className="text-center text-2xl font-extrabold mb-8">
            {selectedPage === "login"
              ? "Login to your Secure Wallet"
              : "Create your Secure Wallet"}
          </h2>

          {selectedPage === "login" ? <LoginPage /> : <RegisterPage />}
        </div>
      </div>
    </div>
  );
}
