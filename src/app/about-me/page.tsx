import type { SyntheticEvent } from "react";
import { useEffect, useRef, useState } from "react";

const AboutMe = () => {
  const [test, setTest] = useState();
  const hihi = useRef<SyntheticEvent>(null);

  useEffect(() => {
    if (test) {
      console.log(test);
    }
  }, []);

  return <div>about me content</div>;
};

export default AboutMe;
