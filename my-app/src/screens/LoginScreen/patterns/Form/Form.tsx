import React from 'react';
import Box from '@/components/Box/Box';
import Input from '@/components/Input/Input';
import Label from '@/components/Label/Label';
import Button from '@/components/Button/Button';

interface FormProps {
  children: React.ReactNode;
}
export default function Form({children}: FormProps) {
  return (
    <Box
      tag="form"
      className='w-full'
    >
      {children}
    </Box>
  );
}

Form.Inputs = () => {
  return (
    <>
      <Label htmlFor="email">
        E-mail
      </Label>
      <Input id="email" placeholder="jayro.dev@gmail.com"/>
      <Label htmlFor="password">
        Senha
      </Label>
      <Input id="password"  placeholder="Sua senha"/>
      <Button>
        Entrar
      </Button>
    </>
  );
}