import React from "react";

function DecreaseIcon({ height = 24, width = 24 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 12.75V18.75C22.5 18.9489 22.421 19.1397 22.2803 19.2803C22.1397 19.421 21.9489 19.5 21.75 19.5H15.75C15.5511 19.5 15.3603 19.421 15.2197 19.2803C15.079 19.1397 15 18.9489 15 18.75C15 18.5511 15.079 18.3603 15.2197 18.2197C15.3603 18.079 15.5511 18 15.75 18H19.9397L12.75 10.8103L9.53061 14.0306C9.46096 14.1004 9.37824 14.1557 9.2872 14.1934C9.19615 14.2312 9.09855 14.2506 8.99999 14.2506C8.90143 14.2506 8.80383 14.2312 8.71278 14.1934C8.62174 14.1557 8.53902 14.1004 8.46936 14.0306L1.71936 7.28063C1.57863 7.1399 1.49957 6.94903 1.49957 6.75C1.49957 6.55098 1.57863 6.36011 1.71936 6.21938C1.8601 6.07865 2.05097 5.99959 2.24999 5.99959C2.44901 5.99959 2.63988 6.07865 2.78061 6.21938L8.99999 12.4397L12.2194 9.21938C12.289 9.14965 12.3717 9.09433 12.4628 9.05659C12.5538 9.01884 12.6514 8.99941 12.75 8.99941C12.8486 8.99941 12.9461 9.01884 13.0372 9.05659C13.1282 9.09433 13.211 9.14965 13.2806 9.21938L21 16.9397V12.75C21 12.5511 21.079 12.3603 21.2197 12.2197C21.3603 12.079 21.5511 12 21.75 12C21.9489 12 22.1397 12.079 22.2803 12.2197C22.421 12.3603 22.5 12.5511 22.5 12.75Z"
        fill="#F04438"
      />
    </svg>
  );
}

export default DecreaseIcon;
