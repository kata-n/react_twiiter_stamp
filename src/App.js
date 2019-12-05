import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';
import img1 from './center.png';

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
    width:"95vh",
    height:"500px",
    backgroundSize: 'cover',
    boxshadow: 'inset 0px -1px 0px 0px rgba(0, 0, 0, 0.09)'
  }
  shapes = {
    A:<i class="fa fa-heart"></i>,
    B:<i class="fa fa-star"></i>,
    C:<i class="fa fa-retweet"></i>,
  }
  constructor(props){
    super(props);
    this.state = {
      list: this.data,
      currentShapeType:'A',
      photoURL: `${img1}`
    };
    this.doAction = this.doAction.bind(this);
    this.deleteAction = this.deleteAction.bind(this);
  }

doAction(e){
  this.data.push({
    x: e.pageX,
    y: e.pageY,
    shapeKey:this.state.currentShapeType,
  });
  this.setState({list:this.data});
}

deleteAction(){
  this.setState({list:this.data = [] });
}

changeShapeType(Key){
  this.setState({currentShapeType: Key});
}

draw(d){
  let s = {
    position:"absolute",
    left:(d.x - 10) + "px",
    top:(d.y - 10) + "px",
  };
  //this.dataに保存されている図形の種類に合わせて描画する
    return(
      <div>
        <div style={s}>{this.shapes[d.shapeKey]}</div>
      </div>
    )
}

handleChangeFile(e){
  const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
  const file = e.target.files[0];
  const image_url = createObjectURL(file);
  this.setState({
    photoURL: image_url,
    file: file
  })
}

render(){
  const { photoURL } = this.state
    return (
      <div>

        <button style={this.btnStyle} onClick={() => this.changeShapeType('A')}><i class="fa fa-heart"></i></button>
        <button style={this.btnStyle} onClick={() => this.changeShapeType('B')}><i class="fa fa-star"></i></button>
        <button style={this.btnStyle} onClick={() => this.changeShapeType('C')}><i class="fa fa-retweet"></i></button>

        <div>
        <img style={this.area} onClick={this.doAction} src={photoURL} />
          {
            this.data.map(value => this.draw(value))
          }
        </div>

        <button style={this.btnStyle} onClick={this.deleteAction}><i class="fa fa-trash"></i></button>

        <label for="inputStyle">ファイルを選択
        <input type="file" id="inputStyle" Style="display:none;" onChange={(e) => this.handleChangeFile(e)} />
        </label>

      </div>
    );
  }
}

export default App;