import { useMemo } from 'react'
import { Dynamicform } from './utilities/Dynamicform'

function App() {
  let memoData = useMemo(() => {
    return {
      initialValue : { 
        file : "", 
        friends : ["hello", "wello" , "dello"]
      },
      submitFun : (values, action) => {
        alert("submit")
      },
      fieldArray : [
        {
          name : "file",
          lable : "File",
          type : "text",
          placeholder : "Upload file"
        },
        {
          type : "fieldArray",
          field : ["select", "text", "text"],
          name : "friends"
        }
      ]
    }
  },[])

  let TestData = useMemo(() => {
    return {
      message : "Hiiiii",
      text : "Helllooooo"
    }
  },[])

  function TestUi (props) {
    return <>
      {props.message &&  props.message}
      {props.text &&  <TestUi message={props.text} />}
    </>
  }


  return (
    <>
      <Dynamicform initialValue={memoData.initialValue} fieldArray={memoData.fieldArray} submitFun={memoData.submitFun}  />
      <TestUi message={TestData.message} text={TestData.text}  />

    </>
  )
}

export default App
