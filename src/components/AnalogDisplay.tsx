import { CSSProperties } from "react";

export const AnalogDisplay = function (props: { time: string | number | Date; }) {
  let date = new Date(props.time);
  let dialStyle: CSSProperties = {
    position: "relative",
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: "solid",
    borderColor: "black",
  };
  let secondHandStyle: CSSProperties = {
    position: "relative",
    top: 100,
    left: 100,
    border: "1px solid red",
    width: "40%",
    height: 1,
    transform:
      "rotate(" + ((date.getSeconds() / 60) * 360 - 90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "red",
  };
  let minuteHandStyle: CSSProperties = {
    position: "relative",
    top: 100,
    left: 100,
    border: "1px solid grey",
    width: "40%",
    height: 3,
    transform:
      "rotate(" + ((date.getMinutes() / 60) * 360 - 90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey",
  };
  let hourHandStyle: CSSProperties = {
    position: "relative",
    top: 92,
    left: 106,
    border: "1px solid grey",
    width: "20%",
    height: 7,
    transform:
      "rotate(" + ((date.getHours() / 12) * 360 - 90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey",
  };

  return (
    <div>
      <div style={dialStyle}>
        <div style={secondHandStyle} />
        <div style={minuteHandStyle} />
        <div style={hourHandStyle} />
      </div>
    </div>
  );
};
