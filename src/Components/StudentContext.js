import React, { useState,createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {

    const [students, setStudents] = useState([ 
        {
            "ID": "1",
            "Name": "Jane",
            "Age": "21",
            "Course": "MERN",
            "Batch": "SEPT",
          },
          {
            "ID": "2",
            "Name": "Phil ",
            "Age": "24",
            "Course": "MEAN",
            "Batch": "SEPT",
          },
          {
            "ID": "3",
            "Name": "John",
            "Age": "27",
            "Course": "JAVA",
            "Batch": "SEPT",
          },
          {
            "ID": "4",
            "Name": "Nelson",
            "Age": "26",
            "Course": "JAVASCRIPT",
            "Batch": "SEPT",
          },
          {
            "ID": "5",
            "Name": "Peter",
            "Age": "23",
            "Course": "MERN",
            "Batch": "SEPT",
          },
          {
            "ID": "6",
            "Name": "Stuart",
            "Age": "22",
            "Course": "MERN",
            "Batch": "SEPT",
          }
    ]);

    return (
        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
    )


}