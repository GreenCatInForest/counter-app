import { Banner } from "./components/Banner";
import { ClassBasedCounter } from "./components/ClassBasedCounter";
import { HooksCounter } from "./components/HooksCounter";

export const App = () => {
  return (
    <div>
      <Banner />
      <ClassBasedCounter />
      <HooksCounter />
    </div>
  );
};
