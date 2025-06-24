import React from 'react'

function FormSelect() {
  const [value, setValue] = React.useState('')
  return (
    <div>
      <select value={value} onChange={({target}) => setValue(target.value)}>
        <option disabled value="">Selecione</option>
        <option value="notebook" >Notebook</option>
        <option value="tablet">Tablet</option>
        <option value="smartphone">Smartphone</option>
      </select>
      { value }
    </div>
  )
}

export default FormSelect