import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {jumbotron, Grid, Row, Col, Image, Button, Jumbotron } from 'react-bootstrap';
import './Home.css';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class Home extends Component {
    constructor(){
        super()
        this.state={
            products:[],
            hideBtn:false
        }
        this.componentDidMount=this.componentDidMount.bind(this);
        this.onBtnClick=this.onBtnClick.bind(this);
        this.onHide=this.onHide.bind(this);
    }

    componentDidMount(){
        
    }

    onBtnClick(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            if(res.data){
            this.setState({
                products:res.data
            })
            }else{
                this.setState({
                    products:'no data'
                })
            }
            console.log(this.state.products)
            this.setState({
                hideBtn:true
            })
        })
    }

    onHide(){
        this.setState({
            products:[]
        })
        this.setState({
            hideBtn:false
        })
    }

  render() {
    return (
      <Grid>
          <Jumbotron>
              <h2>Welcome</h2>
              <p>home page</p>
              <Button onClick={this.onBtnClick}>Get Users List</Button>
              {this.state.hideBtn ? <Button onClick={this.onHide}>Hide List</Button> : '' }
                {this.state.products.map(item => 
                <ListGroup><ListGroupItem>{item.id}</ListGroupItem>
                <ListGroupItem>{item.body}</ListGroupItem>
                </ListGroup>)}
          </Jumbotron>
      </Grid>
    )
  }
}
