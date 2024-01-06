import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { startMovingParticles } from './functions';
const MotionParticles = ({ children }) => {
    useEffect(startMovingParticles, []);
    return _jsx("div", { className: 'background-particles-container', children: children });
};
export default MotionParticles;
