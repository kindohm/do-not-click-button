type Props = {
  onClick: () => void;
  pressed: boolean;
};

export const RedButton = ({ onClick, pressed }: Props) => {
  return (
    <svg
      id="bigRedButton"
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ maxHeight: "60vh" }}
    >
      <g onClick={onClick} style={{ display: pressed ? "none" : "block", cursor: 'pointer' }}>
        <circle cx="100" cy="105" r="75" fill="#990000" />
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="#ff0000"
          stroke="#cc0000"
          strokeWidth="2"
        />
        <text
          x="100"
          y="105"
          fontFamily="Arial"
          fontSize="18"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          DO NOT CLICK
        </text>
      </g>

      <g style={{ display: pressed ? "block" : "none", cursor: 'pointer' }}>
        <circle
          cx="100"
          cy="105"
          r="75"
          fill="#cc0000"
          stroke="#990000"
          strokeWidth="2"
        />
        <text
          x="100"
          y="110"
          fontFamily="Arial"
          fontSize="18"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          DO NOT CLICK
        </text>
      </g>
    </svg>
  );
};
