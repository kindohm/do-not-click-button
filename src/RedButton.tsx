type Props = {
  onClick: () => void;
  pressed: boolean;
};

export const RedButton = ({ onClick, pressed }: Props) => {
  return (
    <svg
      id="bigRedButton"
      width="80%"
      height="80%"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g onClick={onClick} style={{ display: pressed ? "none" : "block" }}>
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
          DO NOT PRESS
        </text>
      </g>

      <g style={{ display: pressed ? "block" : "none" }}>
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
          DO NOT PRESS
        </text>
      </g>
    </svg>
  );
};
