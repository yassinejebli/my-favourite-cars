import styled from 'styled-components/native';

export const Wrapper = styled.View`
`;

export const StyledImage = styled.Image`
    height: 270px;
    width: 100%;
    background-color: #dfdfdf;
`;

export const InfoWrapper = styled.View`
    padding: 24px 16px;
    background-color: #ffffff;
    box-shadow: 0 6px 6px #dbd9da;
`;

export const FlexRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FlexRowSpaceBetween = styled(FlexRow)`
    justify-content: space-between;
`;

export const ModelText = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 24px;
`;

export const HorizontalLine = styled.View`
    background-color: #aeaeae;
    height: 1px;
    margin: 16px 0;
`;

export const VerticalLine = styled.View`
    background-color: #545454;
    width: 1px;
    height: 18px;
    margin: 0 16px;
`;

export const StyledText = styled.Text`
    font-size: 18px;
    color: #545454;
`;

export const ClickableFavIcon = styled.TouchableOpacity`
    padding: 8px; // increase the clickable area
`;
