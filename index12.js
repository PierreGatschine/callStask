/** @format */

/* let view;
const initialize = () => {
  let called = 0;
  return () => {
    if (called > 0) {
      return;
    } else {
      view = "🚵";
      called++;
      console.log("view has been set!");
    }
  };
};

const sartOnce = initialize();
sartOnce();
sartOnce();
sartOnce();
console.log(view);
 */
let view;
const initialize = () => {
  //let called = 0;
  const show = () => {
      view = "🚵";
      //called++;
      console.log("view has been set!");
    }
    return show;
  };


const sartOnce = initialize();
sartOnce();
sartOnce();
sartOnce();
console.log(view);
