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
      <Background />
      <Box 
        tag="section"
        className="items-center justify-center"
      >
        <Text
          tag="h1"
          className="text-4xl font-bold text-center"
        >
          Faça seu login
        </Text>
        <Form>
          Form.input
        </Form>
      </Box>
    </Box>
  );
}