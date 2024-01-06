import { ReactElement } from "react";
type MotionParticlepProps = {
    children: ReactElement;
    motionSpeed: number;
};
export type IMotionParticle = (props: MotionParticlepProps) => ReactElement<any, string | React.JSXElementConstructor<any>>;
declare const MotionParticle: IMotionParticle;
export default MotionParticle;
