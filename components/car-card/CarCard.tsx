import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import StarFilledIcon from "../svg/StarFilled";
import StarNotFilledIcon from "../svg/StarNotFilled";
import {
    ClickableFavIcon,
    FlexRow, FlexRowSpaceBetween, HorizontalLine, InfoWrapper, ModelText, StyledImage, StyledText, VerticalLine,
    Wrapper
} from "./CarCard.css";
import {toggleCarFavAction} from "../../actions/carActions";

export interface ICarCardProps{
    imageURL?: string;
    model: string;
    maker: string;
    year: number;
    isFav: boolean;
}

type AllProps = ICarCardProps&{style: string}

const CarCard  = ({model, year, maker, imageURL, isFav, style}: AllProps) => {
    const dispatch = useDispatch();

    return (
        <Wrapper style={style}>
            {imageURL?<StyledImage source={{uri: imageURL}} />:<StyledImage source={require('../../assets/images/placeholder.png')} />}
            <InfoWrapper>
                <FlexRowSpaceBetween>
                    <ModelText>{model}</ModelText>
                    <ClickableFavIcon onPress={() => dispatch(toggleCarFavAction(model))}>
                        {isFav ? <StarFilledIcon fill={'#f9e26b'} />
                            :
                            <StarNotFilledIcon />
                        }
                    </ClickableFavIcon>
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
