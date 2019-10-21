import React from 'react';

export function buildSVGMarkup(options) {
  return `<svg
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
      fill='${options.fillColor || 'currentColor'}'
      viewBox='0 0 ${options.svgIcon.viewWidth} ${options.svgIcon.viewHeight}'
      width='${options.svgIcon.width}px'
      height='${options.svgIcon.height}px'
    >
      <g>
        <path d='${options.svgIcon.path}' />
      </g>
    </svg>`;
}

export function buildSVGElement(options) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
      fill={options.fillColor || 'currentColor'}
      viewBox={`0 0 ${options.svgIcon.viewWidth} ${options.svgIcon.viewHeight}`}
      width={`${options.svgIcon.width}px`}
      height={`${options.svgIcon.height}px`}
    >
      <g>
        <path d={options.svgIcon.path} />
      </g>
    </svg>
  );
}