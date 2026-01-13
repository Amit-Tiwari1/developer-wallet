import { FaShieldAlt, FaWallet } from "react-icons/fa";
import { IoFlashSharp } from "react-icons/io5";

export default function WalletInfo() {
  return (
    <div className="hidden md:flex flex-col justify-center p-12 text-white bg-gradient-to-br from-[#0f0c29] to-[#302b63]">
      <h1 className="text-4xl font-extrabold mb-6">
        Developer Wallet
      </h1>

      <p className="text-gray-300 mb-10">
        A next-generation web-based wallet to store, send, and manage your digital assets securely.
      </p>

      <div className="space-y-6">
        <FeatureCard
          icon={<FaShieldAlt size={26} />}
          title="Secure & Encrypted"
          desc="Your assets are protected with enterprise-grade encryption."
        />
        <FeatureCard
          icon={<IoFlashSharp size={26} />}
          title="Fast Transactions"
          desc="Lightning-fast transfers with minimal network fees."
        />
        <FeatureCard
          icon={<FaWallet size={26} />}
          title="All-in-One Wallet"
          desc="Store tokens, NFTs, and balances in one powerful wallet."
        />
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
      <div className="text-green-400 mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
      </div>
    </div>
  );
}
