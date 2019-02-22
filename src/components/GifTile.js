import React from 'react';

function GifTile(props) {

  return (
    <>
      <img
        className="img-fluid"
        alt = "gif"
        src={props.src} 
        style={{maxHeight: '100%'}}
        onClick={props.onClick}

      />
      <p>{props.value}</p>
    </>
  );
}

export default GifTile;