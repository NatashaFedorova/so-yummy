import {
    IngHead,
    IngHeadTitleI,
    IngHeadTitleA,
    IngHeadTitleN,
} from './RecipeTableHead.styled';

const RecipeTableHead = ({ titleLeft, titleCenter, titleRight }) => {
    return (
        <>
            <IngHead>
                <IngHeadTitleI >{titleLeft}</IngHeadTitleI>
                <IngHeadTitleN >{titleCenter}</IngHeadTitleN>
                <IngHeadTitleA >{titleRight}</IngHeadTitleA>
            </IngHead>
        </>
    );
};

export default RecipeTableHead;