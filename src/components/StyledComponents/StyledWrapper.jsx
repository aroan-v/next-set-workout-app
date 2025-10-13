'use client'
const { default: styled } = require('styled-components')
import React from 'react'

const StyledDivWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(266, 92%, 58%);

    position: absolute;
    inset: 0;
    display: flex;
    border-radius: 0.5rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  }

  .card.loading {
    background-color: hsla(240, 15%, 9%, 1); /* neutral dark */
    background-image:
      radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsla(240, 20%, 15%, 1) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsla(240, 25%, 20%, 1) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsla(240, 30%, 25%, 1) 0px, transparent 85%);
    transition: background 0.4s ease; /* smooth transition */
  }

  .card.losing {
    background-color: hsla(220, 25%, 10%, 1); /* deep midnight base */
    background-image:
      radial-gradient(at 88% 40%, hsla(220, 25%, 10%, 1) 0px, transparent 80%),
      radial-gradient(at 49% 30%, hsla(220, 25%, 10%, 1) 0px, transparent 80%),
      radial-gradient(at 14% 26%, hsla(220, 25%, 10%, 1) 0px, transparent 80%),
      /* soft cyan glow */
        radial-gradient(at 0% 64%, hsla(195, 65%, 55%, 0.25) 0px, transparent 80%),
      /* muted blue highlight */
        radial-gradient(at 41% 94%, hsla(210, 60%, 60%, 0.25) 0px, transparent 80%),
      /* subtle violet accent */
        radial-gradient(at 100% 99%, hsla(250, 40%, 50%, 0.2) 0px, transparent 80%);
  }

  /* Leading (baby blue + cyan) */
  .card.leading {
    background-color: hsla(200, 15%, 9%, 1);
    background-image:
      radial-gradient(at 88% 40%, hsla(200, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 49% 30%, hsla(200, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(200, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsla(195, 93%, 56%, 1) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsla(185, 100%, 70%, 1) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsla(180, 100%, 65%, 1) 0px, transparent 85%);
  }
`

export default function StyledWrapper({ children }) {
  return (
    <StyledDivWrapper>
      <div className="card losing">{children}</div>
    </StyledDivWrapper>
  )
}
