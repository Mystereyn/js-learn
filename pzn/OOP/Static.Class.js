// Example

"use strict";
class Configuration{
    static name = "Teuku Reynaldi";
    static version = 1.0;
    static nameLearningCourse = "Udemy";
    static job = "colleger";
   
    static printTheObject = function(){
        // const data = [name,version, nameLearningClass, job];
        const data = [Configuration.name, Configuration.version, Configuration.nameLearningCourse  , Configuration.job];
        return console.table(data);
    }
}
//  ini salah karna instance (pewarisan)

// let print = new Configuration();
// console.log(print.printTheObject());         

// yang ini benar

Configuration.printTheObject();


// what if we are using private class?  
// ternyata static di pakai private class tidak bisa 
class DepartmentStore {
    static #generalManager;
    static #salesManager;
    static #stockClerks;
}