import { ArrowRProp } from "@/model/svg";

const ArrowR = ({
  width,
  height,
}: ArrowRProp) => {

  const style = {
    width: width ? width : '24px',
    height: height ? height : '24px',
  }
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      style={style}
    >
      <path d="M9 4.5L16.5 12L9 19.5" 
        strokeWidth="2.25" 
        strokeLinecap="round" 
        strokeLinejoin="round">
      </path>
    </svg>
  );
};

export default ArrowR;