
export function buildSVGMarkup(options) {
  return `<svg
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
      fill='${options.fillColor || 'currentColor'}'
      viewBox='0 0 47.032 47.032'
      width='30px'
      height='30px'
    >
      <g>
        <path d='${options.svgIcon}' />
      </g>
    </svg>`;
}