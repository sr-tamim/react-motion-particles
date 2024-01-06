import { FC, useEffect } from 'react';
import { startMovingParticles } from './functions';
import { IMotionParticlesProps } from './types';

const MotionParticles: FC<IMotionParticlesProps> = ({ children }) => {
    useEffect(startMovingParticles, [])

    return <div className='background-particles-container'>
        {children}
    </div>;
};

export default MotionParticles;
