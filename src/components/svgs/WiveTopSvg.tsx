import React from "react";

const WiveTopSvg: React.FC<{ div: string; fill: string }> = ({ div, fill }) => (
  <div className={`${div} -my-2 `}>
    <svg
      // z-40
      className=" relative z-10"
      viewBox="0 0 1446 443"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={fill}
        d="M312.157 232.329C138.397 234.623 31.6523 301.717 0 334.977V398.056V443H1445.83V277.631C1445.83 -51.8268 1447.61 -6.01186 1439.54 14.4363C1427.9 44.2556 1389.39 190.583 1278.5 190.583C1139.88 190.583 1052.71 371.104 970.853 398.056C905.365 419.617 990.214 262.249 1017.5 210.065C997.49 244.281 875.568 340.367 734.552 361.928C558.281 388.88 529.357 229.462 312.157 232.329Z"
      />
    </svg>
  </div>
);

export default WiveTopSvg;
