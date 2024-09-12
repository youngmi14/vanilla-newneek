import { BadgeType } from "@/model/api/common";
import { root } from '@/styles/globalTheme.css';

type BadgeProps = {
  type: BadgeType
}
const Badge = ({ type }: BadgeProps) => {
  if (type === 'seed') {
    return <></>
  }

  const style = {
    width: '.75rem',
    height: '.75rem',
  }
  const badgeColor = type === "verified" ? root.color.primary.orange_900 : root.color.grayscale.gray_500

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}>
      <g
        clipPath="url(#clip0_2892_73101)">
        <path d="M9.4496 1.41148C10.6699 -0.394802 13.3296 -0.394802 14.5499 1.41148C15.2403 2.43344 16.4742 2.94451 17.685 2.71009C19.8252 2.29576 21.7058 4.17642 21.2915 6.31656C21.0571 7.5274 21.5681 8.76124 22.5901 9.45168C24.3964 10.672 24.3964 13.3317 22.5901 14.552C21.5681 15.2424 21.0571 16.4763 21.2915 17.6871C21.7058 19.8272 19.8252 21.7079 17.685 21.2936C16.4742 21.0591 15.2403 21.5702 14.5499 22.5922C13.3296 24.3985 10.6699 24.3985 9.4496 22.5922C8.75917 21.5702 7.52532 21.0591 6.31448 21.2936C4.17434 21.7079 2.29368 19.8272 2.70802 17.6871C2.94244 16.4763 2.43136 15.2424 1.40941 14.552C-0.396877 13.3317 -0.396877 10.672 1.40941 9.45168C2.43136 8.76124 2.94244 7.5274 2.70802 6.31656C2.29368 4.17642 4.17434 2.29576 6.31448 2.71009C7.52532 2.94451 8.75917 2.43344 9.4496 1.41148Z"
          fill={badgeColor}>
        </path>
        <path d="M6.5791 11.9999L10.4506 15.0971L16.645 8.12842"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round">
        </path>
      </g>
      <defs>
        <clipPath id="clip0_2892_73101">
          <rect width="24" height="24" fill="#ffffff"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Badge;