import '../../scss/components/animations/animationsmain.global.scss';
import '../../scss/components/section.global.scss';

function applyPageAnims(refs: React.RefObject<HTMLDivElement>[], animType?: string[], bufferNum: number = 0): void {
    refs.forEach((ref: React.RefObject<HTMLDivElement>, index: number) => {
        if (ref.current !== null) {
            const rect: DOMRect = ref.current.getBoundingClientRect();
            const topPosition: number = rect.top + window.scrollY;
            const bottomPosition: number = rect.bottom + window.scrollY;

            const buffer: number = bufferNum * window.innerHeight;

            if (animType) {
                if (topPosition < window.scrollY + window.innerHeight - buffer && bottomPosition > window.scrollY + buffer) {
                    switch (animType[index]) {
                        case "c_left": {
                            ref.current.classList.add("content-anim-left");
                            break;
                        }
                        case "c_right": {
                            ref.current.classList.add("content-anim-right");
                            break;
                        }
                        case "c_up": {
                            ref.current.classList.add("content-anim-up");
                            break;
                        }
                        case "c_down": {
                            ref.current.classList.add("content-anim-down");
                            break;
                        }
                        case "s_left": {
                            ref.current.classList.add("self-anim-left");
                            break;
                        }
                        case "s_right": {
                            ref.current.classList.add("self-anim-right");
                            break;
                        }
                        case "s_up": {
                            ref.current.classList.add("self-anim-up");
                            break;
                        }
                        case "s_down": {
                            ref.current.classList.add("self-anim-down");
                            break;
                        }
                        default: {
                            ref.current.classList.add("visible-class");
                            break;
                        }
                    }
                }
            }
        }
    });
};

export default applyPageAnims;