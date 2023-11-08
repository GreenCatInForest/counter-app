import { Banner } from "./components/Banner";
import { ClassBasedCounter } from "./components/ClassBasedCounter";
import { HooksCounter } from "./components/HooksCounter";
// import { AsyncCounter } from "./components/AsyncCounter";

export const App = () => {
  return (
    <div>
      <Banner
        // Passing the props title and subTitle to Banner component
        title="React Counter"
        subTitle="Please use the buttons to interact with your counter"
      />
      <ClassBasedCounter />
      <HooksCounter />
      {/* <AsyncCounter/> */}
    </div>
  );
};
