import React, {useEffect} from 'react';
import StarFilledIcon from "./svg/StarFilled";
import StarNotFilledIcon from "./svg/StarNotFilled";
import {
    FlexRow, FlexRowSpaceBetween, HorizontalLine, InfoWrapper, ModelText, StyledImage, StyledText, VerticalLine,
    Wrapper
} from "./Card.css";

interface ICardProps{
    imageURL: string;
    model: string;
    maker: string;
    year: number;
    isFav: boolean;
}

const Card  = ({model, year, maker, imageURL, isFav = false}: ICardProps) => {
    return (
        <Wrapper>
            <StyledImage source={{uri: imageURL}} />
            <InfoWrapper>
                <FlexRowSpaceBetween>
                    <ModelText>{model}</ModelText>
                    {isFav ? <StarFilledIcon fill={'orange'} />
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

export default Card;
