import React from "react";

function ChatIcon({ width = 36, height = 36 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 25.3242C26.0699 25.4171 26.1125 25.5276 26.123 25.6433C26.1336 25.759 26.1116 25.8754 26.0597 25.9793C26.0078 26.0833 25.9279 26.1707 25.829 26.2318C25.7301 26.2928 25.6162 26.3251 25.5 26.325H10.5C10.3839 26.325 10.2702 26.2927 10.1714 26.2317C10.0727 26.1706 9.99289 26.0833 9.94098 25.9795C9.88908 25.8757 9.8671 25.7595 9.87753 25.6439C9.88795 25.5283 9.93036 25.4179 10 25.325C10.5534 24.583 11.2914 23.9988 12.1406 23.6305C11.6751 23.2056 11.349 22.65 11.205 22.0364C11.0609 21.4229 11.1058 20.7802 11.3336 20.1926C11.5614 19.605 11.9616 19.1 12.4816 18.7439C13.0016 18.3878 13.6171 18.1973 14.2473 18.1973C14.8775 18.1973 15.493 18.3878 16.0129 18.7439C16.5329 19.1 16.9331 19.605 17.1609 20.1926C17.3887 20.7802 17.4336 21.4229 17.2896 22.0364C17.1456 22.65 16.8194 23.2056 16.3539 23.6305C16.9666 23.8953 17.5233 24.2742 17.9945 24.7469C18.4657 24.2742 19.0225 23.8953 19.6352 23.6305C19.1697 23.2056 18.8435 22.65 18.6995 22.0364C18.5555 21.4229 18.6003 20.7802 18.8281 20.1926C19.056 19.605 19.4561 19.1 19.9761 18.7439C20.4961 18.3878 21.1116 18.1973 21.7418 18.1973C22.372 18.1973 22.9875 18.3878 23.5075 18.7439C24.0274 19.1 24.4276 19.605 24.6554 20.1926C24.8833 20.7802 24.9281 21.4229 24.7841 22.0364C24.6401 22.65 24.3139 23.2056 23.8484 23.6305C24.7016 23.9969 25.4435 24.5809 26 25.3242ZM10.125 18.075C10.1907 18.1243 10.2654 18.1601 10.3449 18.1805C10.4244 18.2008 10.5071 18.2053 10.5884 18.1937C10.6696 18.1821 10.7478 18.1546 10.8184 18.1128C10.8891 18.071 10.9508 18.0157 11 17.95C11.3784 17.4455 11.8691 17.0359 12.4332 16.7539C12.9973 16.4718 13.6193 16.325 14.25 16.325C14.8807 16.325 15.5027 16.4718 16.0668 16.7539C16.6309 17.0359 17.1216 17.4455 17.5 17.95C17.5582 18.0276 17.6337 18.0906 17.7205 18.134C17.8073 18.1774 17.903 18.2 18 18.2C18.097 18.2 18.1927 18.1774 18.2795 18.134C18.3663 18.0906 18.4418 18.0276 18.5 17.95C18.8784 17.4455 19.3691 17.0359 19.9332 16.7539C20.4973 16.4718 21.1193 16.325 21.75 16.325C22.3807 16.325 23.0027 16.4718 23.5668 16.7539C24.1309 17.0359 24.6216 17.4455 25 17.95C25.0493 18.0157 25.111 18.071 25.1817 18.1128C25.2524 18.1546 25.3306 18.182 25.4119 18.1936C25.4932 18.2052 25.5759 18.2006 25.6555 18.1802C25.735 18.1598 25.8097 18.1239 25.8754 18.0746C25.9411 18.0253 25.9964 17.9636 26.0382 17.8929C26.08 17.8222 26.1074 17.744 26.119 17.6627C26.1306 17.5814 26.126 17.4987 26.1056 17.4191C26.0852 17.3396 26.0493 17.2649 26 17.1992C25.4466 16.4575 24.7085 15.8735 23.8594 15.5055C24.3249 15.0806 24.651 14.525 24.795 13.9114C24.9391 13.2979 24.8942 12.6552 24.6664 12.0676C24.4386 11.48 24.0384 10.975 23.5184 10.6189C22.9984 10.2628 22.3829 10.0723 21.7527 10.0723C21.1225 10.0723 20.507 10.2628 19.9871 10.6189C19.4671 10.975 19.0669 11.48 18.8391 12.0676C18.6113 12.6552 18.5664 13.2979 18.7104 13.9114C18.8544 14.525 19.1806 15.0806 19.6461 15.5055C19.0334 15.7703 18.4767 16.1492 18.0055 16.6219C17.5343 16.1492 16.9775 15.7703 16.3648 15.5055C16.8303 15.0806 17.1565 14.525 17.3005 13.9114C17.4445 13.2979 17.3997 12.6552 17.1719 12.0676C16.944 11.48 16.5439 10.975 16.0239 10.6189C15.5039 10.2628 14.8884 10.0723 14.2582 10.0723C13.628 10.0723 13.0125 10.2628 12.4925 10.6189C11.9726 10.975 11.5724 11.48 11.3446 12.0676C11.1167 12.6552 11.0719 13.2979 11.2159 13.9114C11.3599 14.525 11.6861 15.0806 12.1516 15.5055C11.2984 15.8722 10.5564 16.4565 10 17.2C9.95075 17.2657 9.91492 17.3404 9.89455 17.4199C9.87418 17.4994 9.86967 17.5821 9.88128 17.6634C9.89289 17.7446 9.92039 17.8228 9.9622 17.8934C10.004 17.9641 10.0593 18.0258 10.125 18.075Z"
        fill="#CCFBEF"
      />
    </svg>
  );
}

export default ChatIcon;
