import {Formik, Field ,Form, ErrorMessage, FieldArray} from "formik"

function Dynamicform(props) {
    console.log("=========")
    return <>
        <Formik
            initialValues={props.initialValue}
            onSubmit={(values, action) => {
                props.submitFun(values, action)
            }}
        >
            {
                fields => {
                    return <>
                     <Form>
                        {
                            props.fieldArray.map((fieldData, index) => {
                               return  <div key={index}>
                                    {
                                        fieldData.type === "fieldArray" ? 
                                        <> {"fieldarray"}  </> :
                                        <>
                                        {
                                            fieldData.label &&  <label htmlFor={fieldData.name}>{fieldData.label}</label>
                                        }
                                        <Field
                                            name={fieldData.name}
                                            type={fieldData.type}
                                            placeholder={fieldData.placeholder ? fieldData.placeholder : "" }
                                        />
                                        <ErrorMessage
                                            name={fieldData.name}
                                            component="div"
                                            className="text-danger"
                                        />
                                        </>
                                    }
                                    
                                    {/* You can add any other field attributes or components here */}
                                </div>
                            })}
                            <button type="submit">Submit</button>
                        </Form>
                        </>
                    }
                }
        </Formik>
    </>
}


export {Dynamicform}