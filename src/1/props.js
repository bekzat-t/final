import React from 'react';

// Родительский компонент
// function ParentComponent() {
//     return <ChildComponent name="Guest"/>;
//   }
  
  // Дочерний компонент
  function ChildComponent(props) {
    return (
      <div>
        <span class="float_right hidden-xs">Hello There, {props.name}!</span>
      </div>
    );
}

export default ChildComponent;