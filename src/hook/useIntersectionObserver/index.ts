import { useEffect, useMemo, useState } from "react";

const useIntersectionObserver = (targetRef:HTMLInputElement, options = {
    root: null,
    threshold: 0.3,
    rootMargin: "0px"
}) => {

    const [isIntersecting, setIntersecting] = useState(false);
    const target = targetRef
    const _options = useMemo(() => ({ ...options }), [options])

    const handleIntersect:IntersectionObserverCallback = ([entry]:IntersectionObserverEntry[]) => {
        if(entry)
            setIntersecting(entry.isIntersecting)
    }

    useEffect(() => {
        if (!target)
            return

        const observer = new IntersectionObserver(handleIntersect, { ..._options })
        observer.observe(target)

        return () => observer.unobserve(target)
    }, [target, _options])


    return { isIntersecting }
}

export default useIntersectionObserver


/* 
function useIntersectionObserver( ref, rootMargin = "0px",) {
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );
        if (ref?.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref?.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return isIntersecting;
}
 */