import React from 'react'
import { Box, Text, Label } from 'theme-ui'

export const InlineError = props => <Text as='div' size='small' color='status-error' { ...props }/>

export const Field = ({
  error,
  errors,
  label,
  children,
  ...props
}) => {
  return (
    <Box mb='3' { ...props }>
      { label && <Label>{ label }</Label> }
      { children }
      { error && <InlineError>{ error.message }</InlineError> }
    </Box>
  )
}

Field.propTypes = {}

export default Field
