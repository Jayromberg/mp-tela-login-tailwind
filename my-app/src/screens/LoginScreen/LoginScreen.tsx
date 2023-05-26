import Box from "@/components/Box/Box";
import Form from "./patterns/Form/Form";
import Background from "./patterns/Background/Background";

export default function LoginScreen() {
  return (
    <Box
      tag="main"
    >
      <Background />
      <Form>
        Olá
      </Form>
    </Box>
  );
}