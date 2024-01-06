import { cloneElement } from "react";
const MotionParticle = ({ children, motionSpeed }) => {
    // set "data-speed" attribute to the child element
    // so that it can be used to move the element
    return cloneElement(children, { 'data-speed': motionSpeed });
};
export default MotionParticle;
