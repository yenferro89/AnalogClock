import React from "react";
import { AnalogDisplay } from "./AnalogDisplay";
import { DigitalDisplay } from "./DigitalDisplay";



export class Clock extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString(),
    };
  }
  launchClock() {
    setInterval(() => {
      console.log("Updating...");
      this.setState({ currentTime: new Date().toLocaleString() });
    }, 1000);
  }
  render() {
    console.log("Rendering...");
    return (
      <div>
        <AnalogDisplay time={this.state.currentTime} />
        <DigitalDisplay time={this.state.currentTime} />
      </div>
    );
  }
}
