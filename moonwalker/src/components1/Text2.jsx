import React,{ useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/img_2/guy221.png"; //astronaut change
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import './text2.css';
import TrackVisibility from 'react-on-screen';


export const Text2 = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  const toRotate = [ "WORLD","LOGICS","ALGORITHM" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(500);
    } //else {
    //   setIndex(prevIndex => prevIndex + 1);
    // }
  }

  return (
    <section className="beenner" id="text">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Fest's Day 2</span>
                <h1>{`PROGRAMER`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p><b><big>\\Events For The Programmers//</big></b></p><br />
                  <p id="des"><i><b><big>Programmers</big> write code for computer programs and mobile applications. They also are involved in maintaining, debugging and troubleshooting systems and software to ensure that everything is running smoothly.
                    </b> <b><big>More</big></b>.</i>
                  </p>
                      <pre><b><i>By- Bsc.CS.IT.DS</i></b></pre>  

                    <button onClick={() => console.log('connect')}>Let's Explore <ArrowRightCircle size={25} /></button>
            
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
