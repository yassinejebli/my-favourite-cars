import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

interface ITranslateOpacityAnimationProps{
    duration?: number;
    children: React.ReactNode;
}

const TranslateOpacityAnimation  = ({children, duration = 800}: ITranslateOpacityAnimationProps) => {
    const [translateXAnimation] = useState(new Animated.Value(70));
    const [opacityAnimation] = useState(new Animated.Value(0));
    useEffect(()=>{
        Animated.parallel([
            Animated.timing(translateXAnimation,{
                toValue: 0,
                duration: duration
            }),
            Animated.timing(opacityAnimation,{
                toValue: 1,
                duration: duration
            })
        ]).start();
    },[]);

    return (
        <Animated.View style={{transform: [{translateX: translateXAnimation}], opacity: opacityAnimation}}>
            {children}
        </Animated.View>
    );
};

export default TranslateOpacityAnimation;
