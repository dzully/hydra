import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const CustomCheckbox = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="Drunk Driving"
      />
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="Speeding"
      />
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="Illegal Parking"
      />
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="Traffic Lights Violence"
      />
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="Not wearing seatbelt"
      />
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="Overload Commercial Vehicle"
      />
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="No Driving License"
      />
      <FormControlLabel
        control={<Checkbox style={{ color: 'blue' }} defaultChecked />}
        label="Roadtax Expired"
      />
    </FormGroup>
  )
}

export default CustomCheckbox
