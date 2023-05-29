import Box from "@/components/Box/Box";
import Form from "./patterns/Form/Form";
import Background from "./patterns/Background/Background";
import Text from "@/components/Text/Text";
import Icon from "@/components/Icon/Icon";

export default function LoginScreen() {
  return (
    <Box
      tag="main"
      className="items-center justify-center h-screen px-6 drop-shadow-2xl"
    >
      <Background />
      <Box 
        tag="section"
        className="items-center justify-center bg-white rounded-lg p-10 gap-6"
      >
        <Box>
          <Icon name="logo"/>
        </Box>
        <Text
          tag="h1"
          className="text-4xl font-bold text-center mb-2"
        >
          Faça seu login
        </Text>
        <Form>
          <Form.Inputs />
        </Form>
      </Box>
    </Box>
  );
}