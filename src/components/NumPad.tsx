import { motion } from "framer-motion";

interface NumPadProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

function NumPad({ value, onChange, onSubmit }: NumPadProps) {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "clear", "enter"];

  const handleClick = (btn: string) => {
    if (btn === "clear") {
      onChange("");
    } else if (btn === "enter") {
      onSubmit();
    } else {
      if (value.length < 8 && /^[0-9]*$/.test(btn)) {
        onChange(value + btn);
      }
    }
  };

  const formatDisplay = (val: string): string => {
    if (val.length === 0) return "DD/MM/YYYY";

    let formatted = val;
    if (val.length >= 2) {
      formatted = formatted.slice(0, 2) + "/" + formatted.slice(2);
    }
    if (val.length >= 5) {
      formatted = formatted.slice(0, 5) + "/" + formatted.slice(5);
    }
    return formatted;
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center">
      {/* Display Input */}
      <div className="bg-white/80 backdrop-blur-lg rounded-xl px-5 py-3 mb-4 text-center shadow-md border-2 border-red-200 w-full">
        <motion.span
          animate={{ scale: value ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-red-600 tracking-wide"
        >
          {formatDisplay(value)}
        </motion.span>
      </div>

      {/* NumPad Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 w-full">
        {buttons.map((btn) => (
          <motion.button
            key={btn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(btn)}
            className={`
              p-3 sm:p-4 md:p-5 rounded-lg font-bold text-lg sm:text-xl shadow-md sm:shadow-lg transition-all
              ${
                btn === "enter"
                  ? "bg-red-500 text-white hover:bg-red-600 col-span-2"
                  : btn === "clear"
                  ? "bg-pink-200 text-red-600 hover:bg-pink-300 col-span-2"
                  : "bg-white text-red-600 hover:bg-red-50"
              }
            `}
          >
            {btn === "enter" ? "✓" : btn === "clear" ? "×" : btn}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default NumPad;
