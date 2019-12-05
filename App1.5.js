import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component{
  
  data = [];
  
  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin:"20px 0px",
    padding: "5px",
  }
  btnStyle = {
    fontsize: "20px",
    padding: "10px 30px",
    border: "border 1px solid",
    margin:"0 20px 20px 0",
  }
  area = {
    width:"500px",
    height:"500px",
    border:"1px solid blue"
  }
  constructor(props){
    super(props);
    this.state = {
      list: this.data,
      hertflg: true,
      starflg: false,
      retweetflg: false
    };
    this.doAction = this.doAction.bind(this);
    this.doheartbtn = this.doheartbtn(this);
    this.dostarbtn = this.dostarbtn(this);
    this.doretweetbtn = this.doretweetbtn(this);
  }

doAction(e){
  let x = e.pageX;
  let y = e.pageY;
  this.data.push({x:x, y:y});
  this.setState({
    list:this.data
  });
}

doheartbtn(){
console.log('aaaaa');
  this.setState((state) => ({
    hertflg: true,
    starflg: false,
    retweetflg: false
  }));
}

dostarbtn(){
console.log('star');
  this.setState({
    hertflg: false
  });
}

doretweetbtn(){
  this.setState((state) => ({
    hertflg: false,
    starflg: false,
    retweetflg: true,
  }));
}

draw(d){
  let s = {
    position:"absolute",
    left:(d.x - 10) + "px",
    top:(d.y - 10) + "px",
  };
  //returnの中で条件分岐ができないので変数にぶち込む
    const input = (this.state.hertflg) ? <div style={s}><i class="fa fa-heart"></i></div> : <div style={s}><i class="fa fa-star">い</i></div>;
  //divタグで囲わないとエラーになる
    return <div>{input}</div>;
}

render(){
    return (
      <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show react.</h2>
      
      <button style={this.btnStyle} onClick={this.doheartbtn}>heart</button>
      <button style={this.btnStyle} onClick={this.dostarbtn}>star</button>
      <button style={this.btnStyle} onClick={this.doretweetbtn}>reTweet</button>
      
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((value)=>this.draw(value))}
      </div>
    </div>
      );
  }
}

export default App;