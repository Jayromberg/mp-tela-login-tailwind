import Box from "@/components/Box/Box";
import Form from "./patterns/Form/Form";
import Background from "./patterns/Background/Background";
import Text from "@/components/Text/Text";

export default function LoginScreen() {
  return (
    <Box
      tag="main"
    >
      <Text
        tag="h1"
      >
        Faça seu login
      </Text>
      <Box
        tag="section"
        className="hidden"
      >
        <Background />
      </Box>
      <Form>
        Olá
      </Form>
    </Box>
  );
}