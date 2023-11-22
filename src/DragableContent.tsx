import React from 'react';
import DraggableList from "react-draggable-lists";
 // import "./styles.css";
  
  export const DragableContent=()=> {

    const listItems = [
      "Entertainment",
      "Private Time",
      "Rest",
      "Meal",
      "Exercise",
      "Work",
      "Home Projects",
      "Family"
    ];
    
    const onMoveEnd = (newList:any) => {
      console.log(newList);
    }

    return (
      <div className="App">
        <div style={{ width: 300, margin: "0 auto" }}>
          <DraggableList width={300} height={50} rowSize={1}
          >
            {listItems.map((item, index) => (
              <li key={index}>{`${index + 1}.  ${item}`}</li>
            ))}
          </DraggableList>
        </div>
      </div>
    );
  }
