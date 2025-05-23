import { createRoot } from "react-dom/client";  
import './tailwind.css';  
import CourseSearchFilter from "./CourseSearchFilter";  

createRoot(document.getElementById("root")).render(  
  <div className="bg-blue-50 min-h-screen p-8">  
    <CourseSearchFilter />  
  </div>  
);  