import React from 'react';
import Box from '@/components/Box/Box';

interface FormProps {
  children: React.ReactNode;
}
export default function Form({children}: FormProps) {
  return (
    <Box
      tag="form"
    >
      {children}
    </Box>
  );
}