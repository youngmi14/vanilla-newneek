import { CloseProp } from "@/model/svg";
import { root } from '@/styles/globalTheme.css';

const Close = ({
    width,
    height,
    color
}: CloseProp) => {    
    const style = {
      width: width ? width : '24px',
      height: height ? height : '24px',
      color: color,
    }
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="button"
        fill="currentColor"
        style={style}
      >
        <g
          id="ic/top app bar-close/24px">
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.35363 18.5607C6.15837 18.756 5.84178 18.756 5.64652 18.5607L4.93942 17.8536C4.74415 17.6584 4.74415 17.3418 4.93942 17.1465L10.5858 11.5001L4.93942 5.85369C4.74415 5.65842 4.74415 5.34184 4.93942 5.14658L5.64652 4.43947C5.84178 4.24421 6.15837 4.24421 6.35363 4.43947L12 10.0859L17.6465 4.43942C17.8418 4.24415 18.1584 4.24415 18.3536 4.43942L19.0607 5.14652C19.256 5.34178 19.256 5.65837 19.0607 5.85363L13.4143 11.5001L19.0607 17.1466C19.256 17.3418 19.256 17.6584 19.0607 17.8537L18.3536 18.5608C18.1584 18.7561 17.8418 18.7561 17.6465 18.5608L12 12.9143L6.35363 18.5607Z">
          </path>
        </g>
      </svg>
    )
}

export default Close;