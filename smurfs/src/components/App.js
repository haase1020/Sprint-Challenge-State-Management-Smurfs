import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import AddSmurf from '../components/AddSmurf';


const App = (props) =>  {
  return (
    <div className="App">
      <h1>The Village People</h1>
      {!props.App && !props.isFetching && <p>See the Village!</p>}
      <div className="village">
        {props.smurfs.map(info => {
          return (
            <div className="card bg-primary" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title text-white">Name: {info.name}</h5>
                <h6 className="card-subtitle mb-2 text-white">Age: {info.age}</h6>
                <p className="card-text text-white">Height: {info.height}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button onClick={props.getSmurfs} type="button" className="btn btn-primary add-btn">Unveil Smurfs</button>
      <AddSmurf />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);


  