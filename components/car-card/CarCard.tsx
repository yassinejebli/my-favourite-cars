import React, {useEffect} from 'react';
import StarFilledIcon from "../svg/StarFilled";
import StarNotFilledIcon from "../svg/StarNotFilled";
import {
    FlexRow, FlexRowSpaceBetween, HorizontalLine, InfoWrapper, ModelText, StyledImage, StyledText, VerticalLine,
    Wrapper
} from "./CarCard.css";

export interface ICarCardProps{
    imageURL?: string;
    model: string;
    maker: string;
    year: number;
    isFav: boolean;
}

const CarCard  = ({model, year, maker, imageURL, isFav, style}: ICarCardProps&{style: string}) => {
    return (
        <Wrapper style={style}>
            {imageURL?<StyledImage source={{uri: imageURL}} />:<StyledImage source={require('../../assets/images/placeholder.png')} />}
            <InfoWrapper>
                <FlexRowSpaceBetween>
                    <ModelText>{model}</ModelText>
                    {isFav ? <StarFilledIcon fill={'#f9e26b'} />
                        :
                        <StarNotFilledIcon />
                    }
                </FlexRowSpaceBetween>
                <HorizontalLine />
                <FlexRow>
                    <StyledText>
                        {maker}
                    </StyledText>
                    <VerticalLine />
                    <StyledText>
                        {year}
                    </StyledText>
                </FlexRow>
            </InfoWrapper>
        </Wrapper>
    );
};

export default CarCard;
