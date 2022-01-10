import React, { useState,createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {

    const [students, setStudents] = useState([ 
        {
            "ID": "1",
            "Name": "Senpai",
            "Age": "24",
            "Course": "MERN",
            "Batch": "SEPT",
          },
          {
            "ID": "2",
            "Name": "Senpai",
            "Age": "24",
            "Course": "MERN",
            "Batch": "SEPT",
          },
          {
            "ID": "3",
            "Name": "Senpai",
            "Age": "24",
            "Course": "MERN",
            "Batch": "SEPT",
          },
          {
            "ID": "4",
            "Name": "Senpai",
            "Age": "24",
            "Course": "MERN",
            "Batch": "SEPT",
          },
          {
            "ID": "5",
            "Name": "Senpai",
            "Age": "24",
            "Course": "MERN",
            "Batch": "SEPT",
          },
          {
            "ID": "6",
            "Name": "Senpai",
            "Age": "24",
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