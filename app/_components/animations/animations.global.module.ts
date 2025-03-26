import '@/styles/components/animations/animationsmain.module.scss';
import "@/styles/components/section.module.scss";
import React from "react";

const animationTypes: object = {
    "c_left": "content-anim-left",
    "c_right": "content-anim-right",
    "c_up": "content-anim-up",
    "c_down": "content-anim-down",
    "s_left": "self-anim-left",
    "s_right": "self-anim-right",
    "s_up": "self-anim-up",
    "s_down": "self-anim-down"
};

function applyPageAnims(refs: React.RefObject<HTMLDivElement>[], animType?: string[], bufferNum: number = 0): void {
    refs.forEach((ref: React.RefObject<HTMLDivElement>, index: number) => {
        if (ref.current !== null) {
            const rect: DOMRect = ref.current.getBoundingClientRect();
            const topPosition: number = rect.top + window.scrollY;
            const bottomPosition: number = rect.bottom + window.scrollY;

            const buffer: number = bufferNum * window.innerHeight;

            if (animType) {
                if (topPosition < window.scrollY + window.innerHeight - buffer && bottomPosition > window.scrollY + buffer) {
                    const animationClass: string = (animationTypes as any)[animType[index]] as string || "visible-class";
                    ref.current.classList.add(animationClass);
                }
            }
        }
    });
};

export default applyPageAnims;