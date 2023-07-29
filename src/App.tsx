// import styled from "styled-components";
// import { motion } from "framer-motion";

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// function App() {
//   return (
//     <Wrapper>
//       <Box />
//       <motion.div></motion.div>
//     </Wrapper>
//   );
// }

// export default App;
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  goalSelector,
  minuteSelector,
  roundState,
  secondState,
  timerState,
} from "./atoms";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const FooterContent = styled.div``;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const TimerCard = styled.div``;

const Timer = styled.div`
  height: 50vh;
`;

const Svg = styled(motion.svg)`
  width: 100%;
  height: 100%;
`;

const Button = styled(motion.button)`
  width: 60px;
  height: 60px;
  padding: 13px;
  border: none;
  border-radius: 100%;
`;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  background: linear-gradient(
    to top,
    #93291e,
    #ed213a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default function App() {
  const [isCounting, setIsCounting] = useState(false);
  const [timer, setTimer] = useRecoilState(timerState);
  const [second, setSecond] = useRecoilState(secondState);
  const [minute, setMinute] = useRecoilState(minuteSelector);
  const [round, setRound] = useRecoilState(roundState);
  const [goal, setGoal] = useRecoilState(goalSelector);

  const handleClick = () => {
    setIsCounting(!isCounting);

    if (!timer)
      setTimer(() => {
        const id = setInterval(() => {
          console.log(1);
        }, 1000);

        return id;
      });
    else clearInterval(timer);
  };

  return (
    <Container>
      <Title>Pomodoro</Title>
      <Timer>
        <TimerCard>{minute}</TimerCard>
        <TimerCard>{second}</TimerCard>
      </Timer>
      <Button onClick={handleClick} layout>
        <AnimatePresence>
          {isCounting ? (
            <Svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></motion.path>
            </Svg>
          ) : (
            <Svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></motion.path>
            </Svg>
          )}
        </AnimatePresence>
      </Button>
      <Footer>
        <FooterContent>{round} / 4 </FooterContent>
        <FooterContent>{goal} / 12 </FooterContent>
      </Footer>
    </Container>
  );
}
