'use client';

import SideRays from "./Siderays";


export default function Background() {
    return (
        <div className="fixed bg-black inset-0 -z-10 overflow-hidden">
            <SideRays
                rayColor1="#94a3b8"
                rayColor2="#94a3b8"
                origin="top-right"
                speed={1.7}
                intensity={2.1}
                spread={2.5}
                tilt={-16}
                saturation={1.05}
                blend={0.69}
                falloff={1.8}
                opacity={1}
            />
        </div>
    );
}