import { ReactElement } from "react";
export interface IMotionParticlesProps {
    children: ReactElement<IMotionParticlesChildProps> | ReactElement<IMotionParticlesChildProps>[];
}
interface IMotionParticlesChildProps {
    "data-speed": number;
}
export {};
