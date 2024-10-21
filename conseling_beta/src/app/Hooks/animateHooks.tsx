import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function useAnimation() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
}

export default useAnimation