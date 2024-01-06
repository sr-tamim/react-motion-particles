# @wensyve/react-motion-particles

A React component library for creating interactive motion particles effects based on mouse movements or device movement.

## Installation

You can install this package using npm or yarn:

```sh
npm install @wensyve/react-motion-particles
```

```sh
yarn add @wensyve/react-motion-particles
```

## Usage
First, import the `MotionParticlesContainer` and `MotionParticle` components:

```js
import { MotionParticlesContainer, MotionParticle } from '@wensyve/react-motion-particles';
```

Then, wrap the `MotionParticle` components with the `MotionParticlesContainer` component:

```js
<MotionParticlesContainer>
    <MotionParticle motionSpeed={2.5}>
        <div>{/* Your content */}</div>
    </MotionParticle>
    <MotionParticle motionSpeed={1}>
        <div>{/* Your content */}</div>
    </MotionParticle>
</MotionParticlesContainer>
```

Each `MotionParticle` child of `MotionParticlesContainer` will move based on mouse movements or device movement. The `motionSpeed` prop determines the speed of the movement. The higher the value, the faster the movement.

Negative `motionSpeed` values will move the MotionParticle in the opposite direction of the mouse movement or device movement.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have a way to improve this project.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
[![sr-tamim's Profilator](https://profilator.deno.dev/sr-tamim?v=1.0.0.alpha.4)](https://github.com/sr-tamim)

## Contributors
[![Contributors](https://contrib.rocks/image?repo=sr-tamim/react-motion-particles)]

#### Powered by [WENSYVE](https://wensyve.com)
