import Box from "@/components/Box/Box";
import Form from "./patterns/Form/Form";
import Background from "./patterns/Background/Background";
import Text from "@/components/Text/Text";
import Icon from "@/components/Icon/Icon";

export default function LoginScreen() {
  return (
    <Box
      tag="main"
      className="items-center justify-center h-screen px-6 drop-shadow-2xl lg:flex-row"
    >
      <Box className="hidden items-center justify-center bg-marianBlue lg:flex w-1/2 h-3/4">
        <Background />
      </Box>
      <Box 
        tag="section"
        className="bg-white items-center justify-center rounded-lg p-10 gap-6 lg:w-1/2 lg:h-3/4 lg:rounded-l-none"
      >
        <Box>
          <Icon name="logo"/>
        </Box>
        <Box
          className="text-center"
        >
          <Text
            tag="h1"
            className="text-4xl font-bold mb-2"
          >
            Faça seu login
          </Text>
          <Text
            tag="p"
            className="text-xl text-gray-700 mb-2"
          >
            Bem-vindo(a) de volta!
          </Text>
        </Box>
        <Form>
          <Form.Inputs />
        </Form>
      </Box>
    </Box>
  );
}