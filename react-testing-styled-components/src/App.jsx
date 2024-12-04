import Container from "./StyledComponets/Container";
import Flex from "./StyledComponets/Flex";
import Button from "./StyledComponets/Button";
import Alink from "./StyledComponets/Alink";

function App() {
  return (
    <div>
      <Container as='section'>
        <h1>Hello </h1>
        <Flex>
          <Button> Click Me </Button>
          <Button size='sm' type='error'>
            Click Me
          </Button>
          <Button size='lg' type='secondary'>
            Click Me
          </Button>
          <Alink href='https://www.google.com'>Google</Alink>
        </Flex>
      </Container>
    </div>
  );
}
export default App;
