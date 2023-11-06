import { Stack } from "react-bootstrap";

export const Banner = () => {
  return (
    <Stack className="container-fluid py-4 bg-dark ">
      <h1 className="display-5 fw-normal py-3 text-center text-info">
        React Counter
      </h1>
      <h2 className="text-center fw-light py-3 text-center text-light">
        Please use the buttons to interact with your counter
      </h2>
    </Stack>
  );
};
