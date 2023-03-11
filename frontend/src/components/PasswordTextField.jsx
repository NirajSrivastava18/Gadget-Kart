import React, { useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Field, useField } from 'formik';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { InputRightElement, Button, InputGroup } from '@chakra-ui/react';

const PasswordTextField = ({ label, type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField({ type, name, placeholder });

  return (
    <FormControl isInvalid={meta.error && meta.touched} mb="6">
      <FormLabel noOfLines={1}>{label}</FormLabel>
      <InputGroup>
        <Field
          as={Input}
          {...field}
          type={showPassword ? 'text' : type}
          name={name}
          placeholder={placeholder}
        />
        <InputRightElement h="full">
          <Button
            varient="ghost"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordTextField;
