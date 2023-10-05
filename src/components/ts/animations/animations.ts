import '../../scss/components/animations/animationsmain.scss';

function applyVisibleClass(refs: React.RefObject<HTMLDivElement>[], animType?: string, bufferNum: number = 0): void {
    refs.forEach((ref) => {
        if (ref.current !== null) {
            const rect = ref.current.getBoundingClientRect();
            const topPosition = rect.top + window.scrollY;
            const bottomPosition = rect.bottom + window.scrollY;

            const buffer = bufferNum * window.innerHeight;

            if (topPosition < window.scrollY + window.innerHeight - buffer && bottomPosition > window.scrollY + buffer) {
                switch (animType) {
                    case "home": {
                        ref.current.classList.add("visible-class");
                        break;
                    }
                    default: {
                        ref.current.classList.add("visible-class");
                        break;
                    }
                }
            }
        }
    });
};

export default applyVisibleClass;