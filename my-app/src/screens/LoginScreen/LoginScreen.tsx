import Box from "@/components/Box/Box";
import Form from "./patterns/Form/Form";
import Background from "./patterns/Background/Background";
import Text from "@/components/Text/Text";

export default function LoginScreen() {
  return (
    <Box
      tag="main"
      className="items-center justify-center h-screen"
    >
      <Text
        tag="h1"
      >
        Faça seu login
      </Text>
      <Box
        tag="section"
        className="opacity-25"
      >
        <Background />
      </Box>
      <Form>
        Olá
      </Form>
    </Box>
  );
}