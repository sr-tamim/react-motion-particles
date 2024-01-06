import { ReactElement } from "react";

export interface IMotionParticlesProps {
    children: ReactElement<IMotionParticlesChildProps> | ReactElement<IMotionParticlesChildProps>[]; // Enforce ChildProps for children
}

interface IMotionParticlesChildProps {
    "data-speed": number;
}