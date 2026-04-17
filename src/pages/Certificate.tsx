import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Certificate = () => {
  const certificateUrl = "/loginware-certificate.pdf";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation & Actions Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 flex items-center justify-between glass neon-outline sticky top-0 z-50"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <a 
          href={certificateUrl}
          download="Loginware_Certificate.pdf"
          className="shine-button px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all hover:scale-[1.03] glow-primary flex items-center gap-2 text-sm"
        >
          <Download size={16} /> Download Certificate
        </a>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-grow w-full h-full relative"
      >
        <iframe 
          src={`${certificateUrl}#toolbar=0`} 
          className="w-full h-[calc(100vh-80px)] border-none"
          title="Loginware Certificate"
        />
      </motion.div>
    </div>
  );
};

export default Certificate;
