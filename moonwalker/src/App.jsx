import React from "react";
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import Home from "./Home";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import { Route, Routes } from "react-router-dom";
import { Register1 } from "./components2/register1";
import { Register2 } from "./components2/register2";
import { Register3 } from "./components2/register3";
import { Register4 } from "./components2/register4";
import { Register5 } from "./components2/register5";
import { Register6 } from "./components2/register6";
import { Register7 } from "./components2/register7";
import { Register8 } from "./components2/register8";
import { Register9 } from "./components2/register9";
import { Register10 } from "./components2/register10";
import { Register11 } from "./components2/register11";
import { Register12 } from "./components2/register12";
import { Register13 } from "./components2/register13";
import { Register14 } from "./components2/register14";
import { Register15 } from "./components2/register15";
import { Register16 } from "./components2/register16";
import { Register17 } from "./components2/register17";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Day1" element={<Day1/>} />
        <Route exact path="/Day2" element={<Day2/>} />
        <Route exact path="/Day3" element={<Day3/>} />
        <Route exact path="/components2/register1" element={<Register1/>} />  {/*valorant*/}
        <Route exact path="/components2/register2" element={<Register2/>} />  {/*codm*/}
        <Route exact path="/components2/register3" element={<Register3/>} />  {/*clashroyal*/}
        <Route exact path="/components2/register4" element={<Register4/>} />  {/*freefire*/}
        <Route exact path="/components2/register5" element={<Register5/>} />  {/*pubg*/}
        <Route exact path="/components2/register6" element={<Register6/>} />  {/*coding*/}
        <Route exact path="/components2/register7" element={<Register7/>} />  {/*debug*/}
        <Route exact path="/components2/register8" element={<Register8/>} />  {/*web-mak*/}
        <Route exact path="/components2/register9" element={<Register9/>} />  {/*Echess*/}
        <Route exact path="/components2/register10" element={<Register10/>} />  {/*mortal-KT*/}
        <Route exact path="/components2/register11" element={<Register11/>} />  {/*Froza5*/}
        <Route exact path="/components2/register12" element={<Register12/>} />  {/*UI*/}
        <Route exact path="/components2/register13" element={<Register13/>} />  {/*poster*/}
        <Route exact path="/components2/register14" element={<Register14/>} />  {/*Vi animate*/}
        <Route exact path="/components2/register15" element={<Register15/>} />  {/*quiz*/}
        <Route exact path="/components2/register16" element={<Register16/>} />  {/*Fifa*/}
        <Route exact path="/components2/register17" element={<Register17/>} />  {/*wwe*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
