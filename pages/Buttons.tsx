import styled from 'styled-components'
import React from 'react'
import { Add } from 'grommet-icons';
import { Box, Button, Text } from 'grommet';


export const Buttons = () => {

  return <>
    <PrimaryButton primary label='test' />

    <PrimaryButton primary >
      <Add color='white' />
      <Text>Add</Text>
    </PrimaryButton>

    <Box align="center" pad="medium">
      <Button 
        primary 
        color="#04838C" 
        label="Primary" 
        focusIndicator={false} 
        hoverIndicator={{ color: '#97E8E8'}} 
        icon={<Add />}
        margin="100px"
      />
    </Box>

  </>
}

const StyledBox = styled(Box)` 
  padding: 0;
`


const PrimaryButton = styled(Button)` 
    border: 2px solid #04838C;
    background-color: #04838C;
    border: 0;
    padding: 10px 24px;
    border-radius: 48px;
    margin-bottom: 20px;

    &:active {
      background-color: #97E8E8;
      border: 2px solid #04838C;
    }
    &:hover {
      background-color: #04B9B9;
      border: 2px solid #04838C;
      box-shadow: 0;
    }
`
