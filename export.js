// inline exporting
export const name = "Jesse"
export const age = 40

// export at the end 
const name = "Jesse"
const age = 40

export { name, age }

//only one default export is possible in a file.
const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
  };
  
  export default message;

