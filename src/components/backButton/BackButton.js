import React from 'react';

const BackButton = ({clickHandler}) => ({
  render() {
    return (<div><button onClick={clickHandler}>Back</button></div>);
  }
})

export default BackButton;