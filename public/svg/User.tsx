import { UserProp } from "@/model/svg";

const User = ({
  width,
  height,
  color
}: UserProp) => {
  const style = {
    width: width ? width : '24px',
    height: height ? height : '24px',
    color: color
  }

  return (
    <svg
      // class="fill-current text-gray-450 size-3"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
    >
      <circle
        cx="12.0006"
        cy="7.41177"
        r="4.67934">
      </circle><path
        d="M3.57324 20.9422C3.57324 16.8699 6.87453 13.5686 10.9469 13.5686H12.0002H13.0536C17.126 13.5686 20.4272 16.8699 20.4272 20.9422H3.57324Z">
    </path>
    </svg>
  )
}

export default User;