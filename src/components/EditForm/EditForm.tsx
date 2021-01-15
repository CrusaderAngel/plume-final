import React, { FormEvent } from 'react';

export type FormData = {
  id:string|undefined;
  sendData:(arg:string|undefined) => void;
}


export const EditForm:React.FC<FormData> = (props:FormData) => {

  const {id, sendData} = props;

  const submitHandler = (event:FormEvent) => {
    event.preventDefault();
    sendData(id);
  }

  return(
    <>
    <form action="upload" method="POST" onSubmit={submitHandler}>
      <input type="file" name="image" id="image-input"/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}