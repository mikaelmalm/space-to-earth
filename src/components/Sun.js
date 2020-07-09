import React from "react";

export const Sun = ({ size = "300px", name }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 300 300"
      data-name={name}
    >
      <g opacity="0.8">
        <linearGradient
          id="a"
          x1="285.3145"
          x2="561.3838"
          y1="1897.1191"
          y2="1897.1191"
          gradientTransform="rotate(180 286.508 1023.806)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e3b050" />
          <stop offset="1" stopColor="#e3b050" stopOpacity=".2" />
        </linearGradient>
        <path
          fill="url(#a)"
          d="M15.405 182.636a136.64 136.64 0 003.285 11.525c18.271 54.827 70.004 94.365 130.976 94.365 60.971 0 112.706-39.538 130.979-94.365a137.773 137.773 0 003.285-11.525 138.352 138.352 0 003.771-32.145c0-11.067-1.311-21.831-3.771-32.146a137.048 137.048 0 00-12.816-33.51c-23.35-43.106-68.979-72.379-121.448-72.379-52.464 0-98.095 29.272-121.447 72.379a137.124 137.124 0 00-12.814 33.51 138.475 138.475 0 00-3.773 32.146c0 11.069 1.313 21.83 3.773 32.145z"
          opacity="0.2"
        />
      </g>
      <g opacity="0.8">
        <linearGradient
          id="b"
          x1="23.4453"
          x2="275.8877"
          y1="150.4922"
          y2="150.4922"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e3b050" />
          <stop offset="1" stopColor="#e3b050" stopOpacity=".2" />
        </linearGradient>
        <path
          fill="url(#b)"
          d="M272.438 121.099a125.264 125.264 0 00-3.004-10.537c-16.708-50.139-64.013-86.291-119.768-86.291-55.754 0-103.06 36.152-119.77 86.291a126.016 126.016 0 00-3.003 10.537c-2.251 9.432-3.449 19.271-3.449 29.394s1.198 19.963 3.449 29.395a125.26 125.26 0 0011.719 30.644c21.352 39.415 63.075 66.184 111.054 66.184 47.976 0 89.702-26.769 111.054-66.184a125.443 125.443 0 0011.718-30.644c2.249-9.432 3.449-19.272 3.449-29.395s-1.199-19.963-3.449-29.394z"
          opacity="0.2"
        />
      </g>
      <g>
        <path
          fill="#EDCF88"
          d="M138.087 38.154c6.369 10.444 16.79 10.444 23.159 0 6.367-10.445 13.551-9.178 15.963 2.814 2.41 11.992 12.205 15.557 21.76 7.92 9.557-7.636 15.873-3.988 14.037 8.105s6.146 18.791 17.738 14.884c11.592-3.908 16.279 1.681 10.42 12.418-5.861 10.737-.652 19.763 11.578 20.055s14.723 7.147 5.543 15.231-7.369 18.346 4.021 22.805c11.393 4.458 11.393 11.753 0 16.211-11.391 4.458-13.201 14.721-4.021 22.804 9.18 8.084 6.688 14.939-5.543 15.231-12.23.293-17.439 9.318-11.578 20.056 5.859 10.738 1.172 16.326-10.42 12.418-11.592-3.909-19.574 2.789-17.738 14.882 1.836 12.096-4.48 15.743-14.037 8.107-9.555-7.636-19.35-4.072-21.76 7.92-2.412 11.992-9.596 13.259-15.963 2.813-6.369-10.442-16.79-10.442-23.159 0-6.367 10.445-13.552 9.179-15.963-2.813s-12.204-15.556-21.76-7.92c-9.557 7.636-15.874 3.988-14.037-8.107 1.835-12.093-6.147-18.791-17.74-14.882-11.592 3.908-16.281-1.68-10.419-12.418 5.861-10.737.65-19.763-11.578-20.056-12.229-.292-14.724-7.147-5.544-15.231 9.18-8.083 7.371-18.346-4.021-22.804s-11.392-11.753 0-16.211c11.392-4.459 13.202-14.721 4.021-22.806s-6.685-14.939 5.544-15.231c12.229-.293 17.439-9.316 11.578-20.054-5.861-10.737-1.172-16.326 10.419-12.418 11.593 3.907 19.575-2.79 17.74-14.884-1.836-12.094 4.48-15.741 14.037-8.105 9.556 7.637 19.349 4.072 21.76-7.92s9.596-13.259 15.963-2.814z"
        />
        <path
          fill="#FF8D4A"
          d="M131.118 227.824c0-2.368-2.191-4.308-4.871-4.308h-25.238c-2.679 0-4.871-1.939-4.871-4.307 0-2.371 2.192-4.309 4.871-4.309h10.844a5.34 5.34 0 01.38-.017h13.84l25.237.002c2.68 0 4.871-1.941 4.871-4.309 0-2.227-1.934-4.07-4.389-4.284l-46.544-.002c-2.679 0-4.872-1.938-4.872-4.307 0-2.37 2.193-4.309 4.872-4.309h7.392c2.68 0 4.872-1.938 4.872-4.308 0-1.942-1.478-3.595-3.487-4.127H95.631c-.482 0-.947-.063-1.385-.181H91.41c-2.679 0-4.873-1.938-4.873-4.309 0-2.368 2.193-4.305 4.873-4.305h44.683c2.009-.533 3.486-2.184 3.486-4.127 0-2.226-1.935-4.07-4.391-4.285h-1.593a5.87 5.87 0 01-.481-.022H109.47c-2.678 0-4.872-1.938-4.872-4.307 0-2.37 2.194-4.308 4.872-4.308h31.998c2.456-.214 4.393-2.061 4.393-4.285 0-2.369-2.193-4.309-4.873-4.309h-21.231a5.6 5.6 0 01-.987-.088h-13.52c-2.679 0-4.872-1.939-4.872-4.308 0-2.37 2.193-4.309 4.872-4.309h25.238c2.679 0 4.87-1.939 4.87-4.309 0-2.225-1.935-4.069-4.391-4.285h-15.433a5.12 5.12 0 01-.482-.021H91.409c-2.68 0-4.872-1.938-4.872-4.309 0-2.368 2.192-4.307 4.872-4.307h45.837c2.456-.215 4.392-2.061 4.392-4.284 0-1.942-1.477-3.595-3.488-4.126h-12.075c-2.679 0-4.872-1.939-4.872-4.308 0-2.369 2.193-4.306 4.872-4.306h1.915a5.27 5.27 0 011.383-.184h23.326c2.01-.529 3.484-2.182 3.484-4.127 0-2.227-1.934-4.07-4.389-4.285H91.41c-2.681 0-4.873-1.938-4.873-4.309 0-2.367 2.192-4.306 4.873-4.306h20.343c.159-.015.319-.022.48-.022h.889c2.456-.215 4.39-2.061 4.39-4.285 0-2.136-1.785-3.919-4.102-4.247h-12.402c-2.679 0-4.871-1.939-4.871-4.31 0-2.368 2.192-4.305 4.871-4.305h3.476c.249-.035.504-.06.764-.06h21.762c2.318-.33 4.107-2.11 4.107-4.251 0-2.366-2.191-4.307-4.871-4.307H105.53c-28.976 15.697-48.654 46.369-48.654 81.641 0 35.27 19.678 65.943 48.654 81.64h20.716c2.68.008 4.872-1.931 4.872-4.3z"
        />
        <path
          fill="#FFB14A"
          d="M174.773 68.852h-7.393c-2.68 0-4.871 1.94-4.871 4.307 0 2.141 1.789 3.921 4.107 4.251h26.236c2.68 0 4.871 1.936 4.871 4.306 0 2.369-2.191 4.307-4.871 4.307h-3.469a5.285 5.285 0 01-.77.062h-35.609c-2.316.328-4.101 2.111-4.101 4.247 0 2.225 1.937 4.07 4.392 4.285h46.541c2.68 0 4.873 1.938 4.873 4.308s-2.193 4.308-4.873 4.308h-7.393c-2.678 0-4.871 1.938-4.871 4.307 0 1.945 1.477 3.598 3.488 4.127h25.916c2.68 0 4.871 1.939 4.871 4.309 0 2.368-2.191 4.307-4.871 4.307h-1.914a5.48 5.48 0 01-1.387.182h-37.16c-2.01.531-3.49 2.184-3.49 4.126 0 2.224 1.938 4.069 4.393 4.284h1.594c.162 0 .322.008.48.023h23.645c2.68 0 4.871 1.938 4.871 4.307 0 2.37-2.191 4.307-4.871 4.307h-31.998c-2.457.216-4.393 2.061-4.393 4.285 0 2.369 2.193 4.309 4.873 4.309h21.23c.34 0 .668.031.988.09l13.52.001c2.68 0 4.871 1.938 4.871 4.306 0 2.37-2.191 4.309-4.871 4.309l-25.238-.001c-2.68 0-4.869 1.939-4.869 4.309 0 2.225 1.934 4.071 4.391 4.285h15.434c.16 0 .322.007.48.021H221.2c2.676 0 4.871 1.938 4.871 4.309 0 2.367-2.195 4.307-4.871 4.307h-45.838c-2.457.215-4.391 2.06-4.391 4.285 0 1.943 1.475 3.594 3.486 4.127h4.555c.48 0 .945.064 1.385.182h2.838c2.678 0 4.869 1.937 4.869 4.306s-2.191 4.307-4.869 4.307h-30.844c-2.011.532-3.488 2.185-3.488 4.127 0 2.229 1.936 4.071 4.392 4.286h60.383c2.678 0 4.871 1.938 4.871 4.308s-2.193 4.307-4.871 4.307h-20.346a4.761 4.761 0 01-.48.024h-.889c-2.455.214-4.391 2.058-4.391 4.284 0 2.367 2.193 4.309 4.871 4.309h7.393c2.68 0 4.873 1.937 4.873 4.305 0 2.371-2.193 4.31-4.873 4.31H189.01c-.131.007-.264.018-.396.018H167.38c-2.68 0-4.871 1.938-4.871 4.306 0 2.369 2.191 4.308 4.871 4.308h7.393c2.68 0 4.871 1.938 4.871 4.307 0 .764-.227 1.478-.623 2.1 36.857-12.282 63.436-47.059 63.436-88.046 0-40.986-26.578-75.764-63.436-88.046.396.622.623 1.337.623 2.099.001 2.359-2.191 4.297-4.871 4.297z"
        />
        <path
          fill="#FFA04A"
          d="M128.056 60.237a92.161 92.161 0 00-22.526 8.614h20.716c2.68 0 4.871 1.94 4.871 4.307 0 2.141-1.789 3.921-4.107 4.251h-21.762c-.26 0-.516.024-.764.06h-3.476c-2.679 0-4.871 1.937-4.871 4.305 0 2.37 2.192 4.31 4.871 4.31h12.402c2.316.328 4.102 2.111 4.102 4.247 0 2.225-1.934 4.07-4.39 4.285h-.889c-.161 0-.322.008-.48.022H91.41c-2.681 0-4.873 1.938-4.873 4.306 0 2.371 2.192 4.309 4.873 4.309h60.383c2.455.215 4.389 2.059 4.389 4.285 0 1.945-1.475 3.598-3.484 4.127h-23.326a5.24 5.24 0 00-1.383.184h-1.915c-2.679 0-4.872 1.937-4.872 4.306 0 2.368 2.193 4.308 4.872 4.308h12.075c2.012.531 3.488 2.184 3.488 4.126 0 2.224-1.936 4.069-4.392 4.284H91.409c-2.68 0-4.872 1.938-4.872 4.307 0 2.371 2.192 4.309 4.872 4.309h23.643c.159.016.319.021.482.021h15.433c2.456.216 4.391 2.061 4.391 4.285 0 2.369-2.191 4.309-4.87 4.309H105.25c-2.679 0-4.872 1.938-4.872 4.309 0 2.368 2.193 4.308 4.872 4.308h13.52a5.6 5.6 0 00.987.088h21.231c2.68 0 4.873 1.939 4.873 4.309 0 2.225-1.937 4.071-4.393 4.285H109.47c-2.678 0-4.872 1.938-4.872 4.308 0 2.368 2.194 4.307 4.872 4.307h23.644c.158.014.319.022.481.022h1.593c2.456.215 4.391 2.06 4.391 4.285 0 1.943-1.478 3.594-3.486 4.127H91.41c-2.679 0-4.873 1.937-4.873 4.305 0 2.37 2.193 4.309 4.873 4.309h2.836c.438.117.903.181 1.385.181h18.394c2.01.532 3.487 2.185 3.487 4.127 0 2.369-2.192 4.308-4.872 4.308h-7.392c-2.679 0-4.872 1.938-4.872 4.309 0 2.369 2.193 4.307 4.872 4.307l46.544.002c2.455.214 4.389 2.058 4.389 4.284 0 2.367-2.191 4.309-4.871 4.309l-25.237-.002h-13.84a5.34 5.34 0 00-.38.017h-10.844c-2.679 0-4.871 1.938-4.871 4.309 0 2.367 2.192 4.307 4.871 4.307h25.238c2.68 0 4.871 1.939 4.871 4.308 0 2.369-2.191 4.308-4.871 4.308H105.53a92.161 92.161 0 0022.526 8.614 93.102 93.102 0 0021.609 2.536c7.442 0 14.676-.883 21.61-2.536a92.713 92.713 0 007.746-2.208 3.886 3.886 0 00.623-2.1c0-2.369-2.191-4.307-4.871-4.307h-7.393c-2.68 0-4.871-1.938-4.871-4.308 0-2.368 2.191-4.306 4.871-4.306h21.234c.133 0 .266-.011.396-.018h10.826c2.68 0 4.873-1.938 4.873-4.31 0-2.368-2.193-4.305-4.873-4.305h-7.393c-2.678 0-4.871-1.941-4.871-4.309 0-2.227 1.936-4.07 4.391-4.284h.889c.162 0 .322-.009.48-.024h20.346c2.678 0 4.871-1.937 4.871-4.307 0-2.369-2.193-4.308-4.871-4.308h-60.383c-2.457-.215-4.392-2.058-4.392-4.286 0-1.942 1.477-3.595 3.488-4.127h30.844c2.678 0 4.869-1.938 4.869-4.307s-2.191-4.306-4.869-4.306h-2.838a5.376 5.376 0 00-1.385-.182h-4.555c-2.012-.533-3.486-2.184-3.486-4.127 0-2.226 1.934-4.07 4.391-4.285H221.2c2.676 0 4.871-1.939 4.871-4.307 0-2.371-2.195-4.309-4.871-4.309H197.555a5.108 5.108 0 00-.48-.021h-15.434c-2.457-.214-4.391-2.061-4.391-4.285 0-2.369 2.189-4.309 4.869-4.309l25.238.001c2.68 0 4.871-1.938 4.871-4.309 0-2.367-2.191-4.306-4.871-4.306l-13.52-.001a5.427 5.427 0 00-.988-.09h-21.23c-2.68 0-4.873-1.939-4.873-4.309 0-2.225 1.936-4.069 4.393-4.285h31.998c2.68 0 4.871-1.937 4.871-4.307 0-2.368-2.191-4.307-4.871-4.307h-23.645a4.762 4.762 0 00-.48-.023h-1.594c-2.455-.215-4.393-2.061-4.393-4.284 0-1.942 1.48-3.595 3.49-4.126h37.16c.482 0 .945-.066 1.387-.182h1.914c2.68 0 4.871-1.938 4.871-4.307 0-2.369-2.191-4.309-4.871-4.309H191.06c-2.012-.529-3.488-2.182-3.488-4.127 0-2.368 2.193-4.307 4.871-4.307h7.393c2.68 0 4.873-1.938 4.873-4.308 0-2.369-2.193-4.308-4.873-4.308h-46.541c-2.456-.215-4.392-2.061-4.392-4.285 0-2.136 1.785-3.919 4.101-4.247h35.609c.262 0 .518-.024.77-.062h3.469c2.68 0 4.871-1.938 4.871-4.307 0-2.37-2.191-4.306-4.871-4.306h-26.236c-2.318-.33-4.107-2.11-4.107-4.251 0-2.366 2.191-4.307 4.871-4.307h7.393c2.68 0 4.871-1.938 4.871-4.307 0-.762-.227-1.477-.623-2.099a93.101 93.101 0 00-7.746-2.209 93.03 93.03 0 00-21.61-2.534 93.156 93.156 0 00-21.609 2.536z"
        />
        <path
          fill="#FF8D4A"
          d="M152.953 155.064a4.051 4.051 0 014.051 4.05 4.05 4.05 0 11-4.051-4.05z"
        />
        <circle cx="128.128" cy="90.186" r="4.049" fill="#FF8D4A" />
        <circle cx="215.809" cy="132.704" r="4.05" fill="#FFA04A" />
        <path
          fill="#FFB14A"
          d="M176.922 206.471a4.208 4.208 0 014.207 4.207 4.21 4.21 0 01-4.207 4.209h-10.148a4.208 4.208 0 110-8.416h10.148z"
        />
        <path
          fill="#FF8D4A"
          d="M161.256 120.24a4.208 4.208 0 110 8.414H151.11a4.208 4.208 0 110-8.414h10.146z"
        />
      </g>
    </svg>
  );
};
