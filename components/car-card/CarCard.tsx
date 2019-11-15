import React, {useEffect} from 'react';
import StarFilledIcon from "../svg/StarFilled";
import StarNotFilledIcon from "../svg/StarNotFilled";
import {
    FlexRow, FlexRowSpaceBetween, HorizontalLine, InfoWrapper, ModelText, StyledImage, StyledText, VerticalLine,
    Wrapper
} from "./CarCard.css";

interface ICardProps{
    imageURL: string;
    model: string;
    maker: string;
    year: number;
    isFav: boolean;
}

const CarCard  = ({model, year, maker, imageURL, isFav = true}: ICardProps) => {
    return (
        <Wrapper>
            <StyledImage source={{uri: imageURL}} />
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
