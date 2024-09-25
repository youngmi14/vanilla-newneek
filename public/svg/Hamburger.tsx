import { HamburgerProp } from "@/model/svg";
import { root } from '@/styles/globalTheme.css';

const Hamburger = ({
  width,
  height
}: HamburgerProp) => {

  const style = {
    color: root.color.grayscale.gray_900,
    width: width ? width : 24,
    height: height ? height : 24,
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24} 
      height={24} 
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M3 4.5C3 4.22386 3.22386 4 3.5 4L20.5 4C20.7761 4 21 4.22386 21 4.5L21 5.5C21 5.77614 20.7761 6 20.5 6L3.5 6C3.22386 6 3 5.77614 3 5.5L3 4.5Z">
      </path>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M3 11.5C3 11.2239 3.22386 11 3.5 11L20.5 11C20.7761 11 21 11.2239 21 11.5L21 12.5C21 12.7761 20.7761 13 20.5 13L3.5 13C3.22386 13 3 12.7761 3 12.5L3 11.5Z">
      </path>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M3 18.5C3 18.2239 3.22386 18 3.5 18L20.5 18C20.7761 18 21 18.2239 21 18.5L21 19.5C21 19.7761 20.7761 20 20.5 20L3.5 20C3.22386 20 3 19.7761 3 19.5L3 18.5Z">
      </path>
    </svg>
  )
}

export default Hamburger;