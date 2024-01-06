import { ReactElement, cloneElement } from "react";

type MotionParticlepProps = {
    children: ReactElement;
    motionSpeed: number;
};

export type IMotionParticle = (props: MotionParticlepProps) => ReactElement<any, string | React.JSXElementConstructor<any>>;

const MotionParticle: IMotionParticle = ({ children, motionSpeed }) => {
    // set "data-speed" attribute to the child element
    // so that it can be used to move the element
    return cloneElement(children, { 'data-speed': motionSpeed })
}
export default MotionParticle;
