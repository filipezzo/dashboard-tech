import React from 'react'

const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: "var(--gap-s) .75rem",
  background: "var(--color-4)",
  borderRadius: 'var(--gap)',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
}

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace", 
  ...generalStyle,

}

type Tinput = React.ComponentProps<'input'>

interface IdateInput extends Tinput {
label: string

}
export const DateInput = ({label, ...props}:IdateInput) => {
  return (
    <div>
    <label style={labelStyle} htmlFor="label">
      {label}
    </label>
    <input style={inputStyle} type="date" name={label} id={label} {...props} />
    </div>
  )
}
