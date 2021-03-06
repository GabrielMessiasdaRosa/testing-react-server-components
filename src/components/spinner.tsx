import SpinnerSvg from "../assets/spinner.svg";
import { Theme } from "../types/theme-type";

export interface SpinnerProps {
  color?: Theme["color"];
  size?: Theme["size"];
}

function Spinner({ size = "md", color = "gray-700" }: SpinnerProps) {
  return <SpinnerSvg className={`text-${color} ${sizeMap[size]}`} />;
}

export default Spinner;

const sizeMap = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
  xl: "w-8 h-8",
};
