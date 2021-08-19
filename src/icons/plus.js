import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({onClick}) => (
  <svg id="Icon_Set" height="0" viewBox="0 0 256 256" width="0" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <g>
      <g>
        <path
          d="m203.486 100.886h-48.372v-48.372c0-14.974-12.139-27.114-27.114-27.114s-27.114 12.139-27.114 27.114v48.372h-48.372c-14.974 0-27.114 12.139-27.114 27.114 0 14.974 12.139 27.114 27.114 27.114h48.372v48.372c0 14.974 12.139 27.114 27.114 27.114s27.114-12.139 27.114-27.114v-48.372h48.372c14.974 0 27.114-12.139 27.114-27.114 0-14.975-12.14-27.114-27.114-27.114z"
          fill="#5fcdff"
        />
      </g>
      <g>
        <path
          d="m40.4 128c0 7.48 3.04 14.26 7.94 19.17 4.91 4.91 11.68 7.94 19.17 7.94h-15c-7.49 0-14.26-3.03-19.17-7.94-4.9-4.91-7.94-11.69-7.94-19.17 0-14.97 12.14-27.11 27.11-27.11h15c-14.97 0-27.11 12.14-27.11 27.11z"
          fill="#73d7f9"
        />
      </g>
      <g>
        <path
          d="m135.5 229.54c-2.38.69-4.9 1.06-7.5 1.06-14.97 0-27.11-12.14-27.11-27.11v-48.38h15v48.38c0 12.37 8.28 22.8 19.61 26.05z"
          fill="#73d7f9"
        />
      </g>
      <g>
        <path
          d="m115.89 100.89h-15v-48.38c0-14.97 12.14-27.11 27.11-27.11 2.6 0 5.12.37 7.5 1.06-11.33 3.25-19.61 13.68-19.61 26.05z"
          fill="#73d7f9"
        />
      </g>
      <g>
        <path
          d="m155.11 52.51v48.38h-15v-48.38c0-12.37-8.28-22.8-19.61-26.05 2.38-.69 4.9-1.06 7.5-1.06 14.97 0 27.11 12.14 27.11 27.11z"
          fill="#30b6ff"
        />
      </g>
      <g>
        <path
          d="m140.11 155.11h15v48.38c0 14.97-12.14 27.11-27.11 27.11-2.6 0-5.12-.37-7.5-1.06 11.33-3.25 19.61-13.68 19.61-26.05z"
          fill="#30b6ff"
        />
      </g>
      <g>
        <path
          d="m230.6 128c0 14.97-12.14 27.11-27.11 27.11h-15c14.97 0 27.11-12.14 27.11-27.11 0-7.48-3.04-14.26-7.94-19.17-4.91-4.91-11.68-7.94-19.17-7.94h15c7.49 0 14.26 3.03 19.17 7.94 4.9 4.91 7.94 11.69 7.94 19.17z"
          fill="#30b6ff"
        />
      </g>
      <g fill="#5f266d">
        <path d="m203.486 96.886h-44.373v-44.372c0-17.156-13.957-31.114-31.113-31.114s-31.113 13.958-31.113 31.114v44.372h-44.373c-17.157 0-31.114 13.958-31.114 31.114s13.957 31.114 31.113 31.114h44.373v44.373c0 17.156 13.957 31.113 31.113 31.113s31.113-13.958 31.113-31.113v-44.373h44.373c17.156 0 31.113-13.958 31.113-31.114s-13.955-31.114-31.112-31.114zm0 54.228h-48.373c-2.209 0-4 1.791-4 4v48.373c0 12.745-10.368 23.113-23.113 23.113s-23.113-10.369-23.113-23.113v-48.373c0-2.209-1.791-4-4-4h-48.373c-12.745 0-23.114-10.369-23.114-23.114s10.368-23.114 23.113-23.114h48.373c2.209 0 4-1.791 4-4v-48.372c0-12.745 10.368-23.114 23.113-23.114s23.113 10.369 23.113 23.114v48.372c0 2.209 1.791 4 4 4h48.373c12.745 0 23.113 10.369 23.113 23.114s-10.367 23.114-23.112 23.114z" />
        <path d="m179 124h-20c-2.209 0-4 1.791-4 4s1.791 4 4 4h20c2.209 0 4-1.791 4-4s-1.791-4-4-4z" />
        <path d="m203.333 124h-9.333c-2.209 0-4 1.791-4 4s1.791 4 4 4h9.333c2.209 0 4-1.791 4-4s-1.791-4-4-4z" />
      </g>
    </g>
  </svg>
);

Plus.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default Plus;
