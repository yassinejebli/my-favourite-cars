import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import StarFilledIcon from "./svg/StarFilled";
import StarNotFilledIcon from "./svg/StarNotFilled";

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


const Wrapper = styled.View`
`;

const StyledImage = styled.Image`
    height: 270px;
`;

const InfoWrapper = styled.View`
    padding: 24px 16px;
    background-color: #ffffff;
    box-shadow: 0 6px 6px #dbd9da;
`;

const FlexRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const FlexRowSpaceBetween = styled(FlexRow)`
    justify-content: space-between;
`;

const ModelText = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 24px;
`;

const HorizontalLine = styled.View`
    background-color: #aeaeae;
    height: 1px;
    margin: 16px 0;
`;

const VerticalLine = styled.View`
    background-color: #545454;
    width: 1px;
    height: 18px;
    margin: 0 16px;
`;

const StyledText = styled.Text`
    color: #545454;
`;

export default Card;
