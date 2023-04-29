import React from 'react';
import Particles from "react-tsparticles";
import ParticleConfig from '../ParticleConfig/ParticleConfig';

const ParticleBg = () => {
    return (
        <div>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
}

export default ParticleBg;
