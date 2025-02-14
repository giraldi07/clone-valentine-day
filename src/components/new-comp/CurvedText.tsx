import React from 'react';
import styled from 'styled-components';

interface CurvedTextProps {
  text: string;
  objectSize?: number;
  spacing?: number;
  offset?: number;
  overlap?: boolean;
  fontFamily?: 'bebas-neue' | 'lobster-two' | 'montserrat'; // Prop untuk memilih font
}

const CurvedText: React.FC<CurvedTextProps> = ({
  text,
  objectSize = 120,
  spacing = 12,
  offset = 30,
  overlap = false,
  fontFamily = 'lobster-two', // Default font: Lobster Two
}) => {
  const d = objectSize + spacing * 2;
  const r = objectSize / 2 + spacing / 2;

  // Map fontFamily ke nama font yang sesuai
  const fontMap = {
    'bebas-neue': 'Bebas Neue',
    'lobster-two': 'Lobster Two',
    'montserrat': 'Montserrat',
  };

  const CurvedTextContainer = styled.div`
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: ${d + offset * 1}px;
    height: ${r + offset}px;
    display: flex;
    justify-content: center;
    align-items: center;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
      font-family: ${fontMap[fontFamily]}, cursive; // Terapkan fontFamily dari prop
      font-size: ${objectSize / 3}px; // Sesuaikan ukuran font berdasarkan objectSize
    }
  `;

  return (
    <CurvedTextContainer className="curved-text">
      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
        <path id="curve" d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${r + offset}`} />
        <text width="500">
          <textPath xlinkHref="#curve" startOffset="50%">
            {text}
          </textPath>
        </text>
      </svg>
    </CurvedTextContainer>
  );
};

export default CurvedText;