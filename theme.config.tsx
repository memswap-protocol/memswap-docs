import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const github = "https://github.com/memswap-eth/memswap-docs";

const config: DocsThemeConfig = {
  logo: (
    <svg
      width="175"
      height="28"
      viewBox="0 0 175 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_605_3)">
        <path
          d="M43.8935 23H39.9523C39.6172 23 39.3703 22.9296 39.2116 22.7889C39.0705 22.6306 39 22.3843 39 22.05V4.95C39 4.61574 39.0705 4.37824 39.2116 4.2375C39.3703 4.07917 39.6172 4 39.9523 4H44.211C44.4931 4 44.7224 4.06157 44.8987 4.18472C45.0927 4.30787 45.269 4.51018 45.4277 4.79167L47.8084 9.09306C47.8965 9.25139 47.9671 9.36574 48.02 9.43611C48.0905 9.50648 48.1787 9.54167 48.2845 9.54167H48.5226C48.6284 9.54167 48.7077 9.50648 48.7606 9.43611C48.8312 9.36574 48.9105 9.25139 48.9987 9.09306L51.3529 4.79167C51.5116 4.51018 51.6791 4.30787 51.8555 4.18472C52.0494 4.06157 52.2875 4 52.5696 4H56.8548C57.1898 4 57.4279 4.07917 57.569 4.2375C57.7277 4.37824 57.807 4.61574 57.807 4.95V22.05C57.807 22.3843 57.7277 22.6306 57.569 22.7889C57.4279 22.9296 57.1898 23 56.8548 23H52.7813C52.4462 23 52.1993 22.9296 52.0406 22.7889C51.8995 22.6306 51.829 22.3843 51.829 22.05V12.7611L50.2684 15.6375C50.1096 15.9366 49.9157 16.1565 49.6864 16.2972C49.4748 16.4204 49.2015 16.4819 48.8664 16.4819H47.8084C47.4733 16.4819 47.1912 16.4204 46.9619 16.2972C46.7503 16.1565 46.5651 15.9366 46.4064 15.6375L44.8458 12.7611V22.05C44.8458 22.3843 44.7664 22.6306 44.6077 22.7889C44.4667 22.9296 44.2286 23 43.8935 23Z"
          fill="currentColor"
        />
        <path
          d="M74.6735 23H62.4C62.065 23 61.8181 22.9296 61.6594 22.7889C61.5183 22.6306 61.4478 22.3843 61.4478 22.05V4.95C61.4478 4.61574 61.5183 4.37824 61.6594 4.2375C61.8181 4.07917 62.065 4 62.4 4H74.6735C75.0086 4 75.2466 4.07917 75.3877 4.2375C75.5464 4.37824 75.6258 4.61574 75.6258 4.95V8.0375C75.6258 8.37176 75.5464 8.61806 75.3877 8.77639C75.2466 8.91713 75.0086 8.9875 74.6735 8.9875H67.3729V11.0194H72.5309C72.866 11.0194 73.1041 11.0986 73.2451 11.2569C73.4039 11.3977 73.4832 11.6352 73.4832 11.9694V14.7931C73.4832 15.1273 73.4039 15.3736 73.2451 15.5319C73.1041 15.6727 72.866 15.7431 72.5309 15.7431H67.3729V18.0125H74.6735C75.0086 18.0125 75.2466 18.0917 75.3877 18.25C75.5464 18.3907 75.6258 18.6282 75.6258 18.9625V22.05C75.6258 22.3843 75.5464 22.6306 75.3877 22.7889C75.2466 22.9296 75.0086 23 74.6735 23Z"
          fill="currentColor"
        />
        <path
          d="M83.6484 23H79.7072C79.3721 23 79.1252 22.9296 78.9665 22.7889C78.8255 22.6306 78.7549 22.3843 78.7549 22.05V4.95C78.7549 4.61574 78.8255 4.37824 78.9665 4.2375C79.1252 4.07917 79.3721 4 79.7072 4H83.9659C84.248 4 84.4773 4.06157 84.6536 4.18472C84.8476 4.30787 85.0239 4.51018 85.1826 4.79167L87.5633 9.09306C87.6515 9.25139 87.722 9.36574 87.7749 9.43611C87.8454 9.50648 87.9336 9.54167 88.0394 9.54167H88.2775C88.3833 9.54167 88.4626 9.50648 88.5155 9.43611C88.5861 9.36574 88.6654 9.25139 88.7536 9.09306L91.1078 4.79167C91.2665 4.51018 91.434 4.30787 91.6104 4.18472C91.8043 4.06157 92.0424 4 92.3246 4H96.6097C96.9448 4 97.1828 4.07917 97.3239 4.2375C97.4826 4.37824 97.562 4.61574 97.562 4.95V22.05C97.562 22.3843 97.4826 22.6306 97.3239 22.7889C97.1828 22.9296 96.9448 23 96.6097 23H92.5362C92.2011 23 91.9542 22.9296 91.7955 22.7889C91.6545 22.6306 91.5839 22.3843 91.5839 22.05V12.7611L90.0233 15.6375C89.8646 15.9366 89.6706 16.1565 89.4413 16.2972C89.2297 16.4204 88.9564 16.4819 88.6213 16.4819H87.5633C87.2282 16.4819 86.9461 16.4204 86.7168 16.2972C86.5052 16.1565 86.3201 15.9366 86.1613 15.6375L84.6007 12.7611V22.05C84.6007 22.3843 84.5214 22.6306 84.3626 22.7889C84.2216 22.9296 83.9835 23 83.6484 23Z"
          fill="currentColor"
        />
        <path
          d="M110.037 23H101.679C101.344 23 101.097 22.9296 100.938 22.7889C100.797 22.6306 100.726 22.3843 100.726 22.05V18.9625C100.726 18.6282 100.797 18.3907 100.938 18.25C101.097 18.0917 101.344 18.0125 101.679 18.0125H108.794C109.023 18.0125 109.191 17.9421 109.297 17.8014C109.42 17.6431 109.482 17.4583 109.482 17.2472C109.482 16.9481 109.42 16.7282 109.297 16.5875C109.191 16.4468 109.023 16.3676 108.794 16.35L104.826 15.7958C103.592 15.6199 102.596 15.2153 101.837 14.5819C101.097 13.9486 100.726 12.8931 100.726 11.4153V8.64444C100.726 7.14907 101.211 6.00556 102.181 5.21389C103.151 4.40463 104.491 4 106.202 4H113.608C113.943 4 114.181 4.07917 114.322 4.2375C114.481 4.37824 114.561 4.61574 114.561 4.95V8.09028C114.561 8.42454 114.481 8.67083 114.322 8.82917C114.181 8.96991 113.943 9.04028 113.608 9.04028H107.445C107.216 9.04028 107.039 9.11944 106.916 9.27778C106.793 9.41852 106.731 9.60324 106.731 9.83194C106.731 10.0606 106.793 10.2542 106.916 10.4125C107.039 10.5708 107.216 10.6588 107.445 10.6764L111.386 11.2042C112.621 11.3801 113.617 11.7847 114.375 12.4181C115.134 13.0514 115.513 14.1069 115.513 15.5847V18.3556C115.513 19.8509 115.019 21.0032 114.031 21.8125C113.062 22.6042 111.73 23 110.037 23Z"
          fill="currentColor"
        />
        <path
          d="M132.082 4H136.023C136.358 4 136.596 4.07917 136.737 4.2375C136.896 4.37824 136.975 4.61574 136.975 4.95V15.1889C136.975 15.7519 136.949 16.2796 136.896 16.7722C136.861 17.2472 136.728 17.8102 136.499 18.4611L135.177 22.05C135.088 22.3139 134.956 22.5426 134.78 22.7361C134.621 22.912 134.401 23 134.119 23H130.6C130.318 23 130.063 22.9384 129.833 22.8153C129.604 22.6921 129.454 22.4898 129.384 22.2083L128.167 17.9069C128.114 17.731 128.043 17.6167 127.955 17.5639C127.885 17.4935 127.797 17.4583 127.691 17.4583H127.453C127.347 17.4583 127.25 17.4935 127.162 17.5639C127.091 17.6167 127.03 17.731 126.977 17.9069L125.733 22.2083C125.663 22.4722 125.531 22.6745 125.337 22.8153C125.143 22.9384 124.905 23 124.622 23H121.131C120.849 23 120.602 22.912 120.39 22.7361C120.196 22.5602 120.055 22.3315 119.967 22.05L118.644 18.4083C118.415 17.7574 118.274 17.1944 118.221 16.7194C118.186 16.2269 118.168 15.6991 118.168 15.1361V4.95C118.168 4.61574 118.239 4.37824 118.38 4.2375C118.539 4.07917 118.785 4 119.12 4H123.194C123.529 4 123.767 4.07917 123.908 4.2375C124.067 4.37824 124.146 4.61574 124.146 4.95V14.6611L125.68 11.3361C125.822 11.037 126.007 10.8259 126.236 10.7028C126.465 10.5796 126.747 10.5181 127.082 10.5181H128.193C128.528 10.5181 128.811 10.5796 129.04 10.7028C129.269 10.8259 129.454 11.037 129.595 11.3361L131.129 14.6611V4.95C131.129 4.61574 131.2 4.37824 131.341 4.2375C131.5 4.07917 131.747 4 132.082 4Z"
          fill="currentColor"
        />
        <path
          d="M147.293 9.54167L146.05 13.5528H150.203L148.959 9.54167C148.889 9.38333 148.809 9.26898 148.721 9.19861C148.651 9.12824 148.563 9.09306 148.457 9.09306H147.795C147.69 9.09306 147.593 9.12824 147.504 9.19861C147.434 9.26898 147.363 9.38333 147.293 9.54167ZM145.785 22.05C145.785 22.3843 145.706 22.6306 145.547 22.7889C145.406 22.9296 145.168 23 144.833 23H140.944C140.609 23 140.363 22.9296 140.204 22.7889C140.063 22.6306 139.992 22.3843 139.992 22.05V15.0833C139.992 14.5556 140.072 13.9486 140.23 13.2625C140.407 12.5764 140.671 11.7759 141.024 10.8611L143.325 4.87083C143.431 4.57176 143.59 4.35185 143.801 4.21111C144.03 4.07037 144.321 4 144.674 4H151.79C152.125 4 152.398 4.07037 152.61 4.21111C152.839 4.35185 153.006 4.57176 153.112 4.87083L155.413 10.8611C155.766 11.7759 156.022 12.5764 156.181 13.2625C156.357 13.9486 156.445 14.5556 156.445 15.0833V22.05C156.445 22.3843 156.366 22.6306 156.207 22.7889C156.066 22.9296 155.828 23 155.493 23H151.499C151.146 23 150.881 22.9296 150.705 22.7889C150.546 22.6306 150.467 22.3843 150.467 22.05V18.3556H145.785V22.05Z"
          fill="currentColor"
        />
        <path
          d="M164.763 23H160.663C160.328 23 160.081 22.9296 159.923 22.7889C159.782 22.6306 159.711 22.3843 159.711 22.05V4.95C159.711 4.61574 159.782 4.37824 159.923 4.2375C160.081 4.07917 160.328 4 160.663 4H168.757C171.156 4 172.796 4.475 173.677 5.425C174.559 6.375 175 7.61528 175 9.14583V12.5236C175 14.0542 174.559 15.2944 173.677 16.2444C172.796 17.1944 171.156 17.6694 168.757 17.6694H165.716V22.05C165.716 22.3843 165.636 22.6306 165.477 22.7889C165.336 22.9296 165.098 23 164.763 23ZM165.663 8.93472V12.9194H168.043C168.555 12.9194 168.89 12.7875 169.048 12.5236C169.207 12.2597 169.286 11.9606 169.286 11.6264V10.2278C169.286 9.89352 169.207 9.59444 169.048 9.33056C168.89 9.06667 168.555 8.93472 168.043 8.93472H165.663Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6783 0.267476C14.7554 0.250548 14.8346 0.245878 14.9131 0.25364L20.4488 0.801008C20.5295 0.808992 20.6085 0.830025 20.6825 0.863287L26.7717 3.60013C26.8805 3.649 26.976 3.72309 27.0504 3.81625L31.2022 9.01625C31.2738 9.106 31.3239 9.211 31.3486 9.32316L32.7325 15.6179C32.7797 15.8325 32.7304 16.0571 32.5976 16.2322L28.4458 21.7059C28.279 21.9257 28.0051 22.0362 27.7325 21.9937L22.9881 21.2529L21.9554 23.091V27C21.9554 27.2987 21.7781 27.5689 21.5042 27.6879C21.2302 27.8069 20.9118 27.752 20.6935 27.5481L15.9275 23.0974H10.4107C10.1582 23.0974 9.92269 22.9703 9.784 22.7593L6.31608 17.4839L1.00094 15.3816C0.726976 15.2733 0.541827 15.0146 0.527655 14.7203L0.250869 8.97292C0.240627 8.76024 0.321263 8.55324 0.472667 8.40353L6.83874 2.1088C6.93957 2.00909 7.06661 1.94001 7.20511 1.90958L14.6783 0.267476ZM7.63459 16.7589L10.515 21.1407L16.4645 14.8054L9.71416 10.1332L7.63459 16.7589ZM11.2711 9.38655L17.3263 13.5777L20.152 7.98952L11.2711 9.38655ZM20.5917 6.4019L19.7497 2.2392L15.203 1.78962L10.9255 7.92248L20.5917 6.4019ZM9.56805 7.24662L8.32247 3.19985L13.1269 2.14417L9.56805 7.24662ZM7.01334 4.04561L8.288 8.18684H2.82519L7.01334 4.04561ZM1.78699 9.68684H8.2821L6.33842 15.8796L2.00264 14.1648L1.78699 9.68684ZM21.3997 2.83017L25.9914 4.89393L28.6026 8.16445L22.1253 6.4177L21.3997 2.83017ZM29.2711 9.8983L21.8761 7.90407L18.807 13.9734L25.5762 14.1965L29.2711 9.8983ZM25.3513 15.6899L19.2985 15.4904L22.9762 19.7329L26.7784 20.3265L25.3513 15.6899ZM28.1347 19.6339L31.1931 15.6017L30.206 11.1118L26.7493 15.1329L28.1347 19.6339ZM21.677 20.5242L18.0667 16.3594L17.1041 21.6896L20.7944 22.0951L21.677 20.5242ZM20.4554 23.5669L18.3843 23.3393L20.4554 25.2734V23.5669ZM15.5965 21.5974L16.4186 17.0455L12.1439 21.5974H15.5965Z"
          fill="url(#paint0_linear_605_3)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_605_3"
          x1="4.875"
          y1="6.41667"
          x2="24.4773"
          y2="27.1918"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF65CB" />
          <stop offset="1" stopColor="#FF6B00" />
        </linearGradient>
        <clipPath id="clip0_605_3">
          <rect width="175" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  primaryHue: 328,
  project: {
    link: "https://github.com/memswap-eth",
  },
  docsRepositoryBase: `${github}/tree/main/`,
  sidebar: { defaultMenuCollapseLevel: 1, autoCollapse: true },
  footer: {
    text() {
      return (
        <div>
          <div style={{ display: "block" }}>
            <a
              style={{ display: "flex", gap: "4px", alignItems: "center" }}
              target="_blank"
              rel="noopener noreferrer"
              title="vercel.com homepage"
              href="https://vercel.com?utm_source=nextra.site"
            >
              <span>Powered By</span>
              <svg height={20} viewBox="0 0 283 64" fill="none">
                <title>Vercel</title>
                <path
                  fill="currentColor"
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                />
              </svg>
            </a>
          </div>
        </div>
      );
    },
  },
};

export default config;
