import '../../scss/components/animations/animationsmain.scss';
import '../../scss/components/section.scss';

function applyPageAnims(refs: React.RefObject<HTMLDivElement>[], animType?: string[], bufferNum: number = 0): void {
    refs.forEach((ref: React.RefObject<HTMLDivElement>, index: number) => {
        if (ref.current !== null) {
            const rect = ref.current.getBoundingClientRect();
            const topPosition = rect.top + window.scrollY;
            const bottomPosition = rect.bottom + window.scrollY;

            const buffer = bufferNum * window.innerHeight;

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