import { ReactNode, useEffect, useRef } from 'react';

const MotionParticlesContainer = ({ children }:{
    children: ReactNode
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        startMovingParticles()
        return () => stopMovingParticles()
    }, [])

    function startMovingParticles() {
        window.addEventListener('mousemove', moveParticles)

        // move particles in mobile device depending on mobile movement
        window.addEventListener('deviceorientation', moveParticles)
    }

    function stopMovingParticles() {
        window.removeEventListener('mousemove', moveParticles)
        window.removeEventListener('deviceorientation', moveParticles)
    }

    // move particles in desktop devices depending on mouse move
    function moveParticles(e: MouseEvent | DeviceOrientationEvent) {
        // remove mouse move event listener for mobile device
        (e instanceof DeviceOrientationEvent && e.gamma && e.beta) && window.removeEventListener('mousemove', moveParticles)

        const particlesParent = containerRef.current
        if (!particlesParent) return
        const xAxis: number = (e instanceof MouseEvent && e.x) ? e.x : (e instanceof DeviceOrientationEvent && e.gamma) ? e.gamma * 15 : 0;
        const yAxis: number = (e instanceof MouseEvent && e.y) ? e.y : (e instanceof DeviceOrientationEvent && e.beta) ? e.beta * 15 : 0;
        particlesParent.querySelectorAll('[data-speed]').forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed')!) * (-0.01);
            const moveX = ((window.innerWidth / 2 - xAxis) * speed).toFixed(1);
            const moveY = ((window.innerHeight / 2 - yAxis) * speed).toFixed(1);
            (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        })
    }


    return <div className='motion-particles-container' ref={containerRef}>
        {children}
    </div>;
};

export default MotionParticlesContainer;
