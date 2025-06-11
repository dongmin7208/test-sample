import { Button, Container, CssBaseline } from "@mui/material";
import { atom, useRecoilState } from "recoil";
import Map from "./Map";

const counterState = atom({ key: "count", default: 0 });

function AppContent() {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <Container>
      <h1>Count: {count}</h1>
      <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
        増加
      </Button>
    </Container>
  );
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppContent />
      <Map />
    </>
  );
}
