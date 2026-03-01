import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (options = {}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options
  });

  const animationClass = inView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';

  return { ref, inView, animationClass };
};

export default useScrollAnimation;
