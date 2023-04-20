import {
    IngImg, IngHead, IngHeadTitleI, IngHeadTitleA, IngHeadTitleN, IngListItem, IngListItemInfo,
    IngListItemInfoText, IngListItemNumber, IngListItemNumberWrap, IngListItemInput,
    IngListItemLabel, IngListItemCheckWrap
} from './Recipe.styled';

const RecipeInngredientsList = ({ measurre, info }) => {

    const rer = measurre.map(item => item.measure);

    console.log("Info ", info)
    console.log("measure ", measurre)
    console.log("measure ARR ", rer)

    // const dataMerge = function (measurre, info) {
    //     return measurre.map(movie => ({
    //         ...movie,
    //         mykey: movie.id.map(id => {
    //             return info.find(element => element._id === id)?.measure;
    //         }),
    //     }));
    // };




    // const dataMerge2 = function (measurre, info) {
    //     return measurre.map(movie => ({
    //         ...movie,
    //     }));
    // };
    // console.log("megr ", dataMerge2())

    return (
        <>
            <IngHead>
                <IngHeadTitleI >Ingredients</IngHeadTitleI>
                <IngHeadTitleN >Number</IngHeadTitleN>
                <IngHeadTitleA >Add to list</IngHeadTitleA>
            </IngHead>


            <ul>
                <IngListItem>
                    <IngListItemInfo >
                        <IngImg src="../images/recipeById/image4.png" alt="test-img" />
                        <IngListItemInfoText>Ingredient 1</IngListItemInfoText>
                    </IngListItemInfo>
                    <IngListItemNumberWrap >
                        <IngListItemNumber>1 kg</IngListItemNumber>
                    </IngListItemNumberWrap>
                    <IngListItemCheckWrap >
                        <IngListItemInput type="checkbox" id="vehicle4" name="vehicle4" />
                        <IngListItemLabel htmlFor="vehicle4" >  </IngListItemLabel>
                    </IngListItemCheckWrap>
                </IngListItem>

                <IngListItem>
                    <IngListItemInfo >
                        <IngImg src="../images/recipeById/image6.png" alt="test-img" />
                        <IngListItemInfoText>Ingredient 2</IngListItemInfoText>
                    </IngListItemInfo>
                    <IngListItemNumberWrap >
                        <IngListItemNumber >4</IngListItemNumber>
                    </IngListItemNumberWrap>
                    <IngListItemCheckWrap >
                        <IngListItemInput type="checkbox" id="vehicle3" name="vehicle3" />
                        <IngListItemLabel htmlFor="vehicle3" >  </IngListItemLabel>
                    </IngListItemCheckWrap>
                </IngListItem>

                <IngListItem>
                    <IngListItemInfo >
                        <IngImg src="../images/recipeById/image10.png" alt="test-img" />
                        <IngListItemInfoText>Ingredient  3</IngListItemInfoText>
                    </IngListItemInfo>
                    <IngListItemNumberWrap >
                        <IngListItemNumber >1 Slice</IngListItemNumber>
                    </IngListItemNumberWrap>
                    <IngListItemCheckWrap >
                        <IngListItemInput type="checkbox" id="vehicle2" name="vehicle2" />
                        <IngListItemLabel htmlFor="vehicle2" >  </IngListItemLabel>
                    </IngListItemCheckWrap>
                </IngListItem>
            </ul>


        </>
    );
};

export default RecipeInngredientsList;


// input[type=checkbox]:checked+label:before {
//      color:#74c5ec; 
//      font-size: 20px; 
// }

// export const IngListItemCheckWrap = styled.div`
// display: flex;
// justify-content: center;
// width: 100px;
// `;

// export const IngListItemLabel = styled.label`
// box-shadow: rgba(126, 126, 126, 0.5) 0px 0px 0px 2px inset;
// border-radius: 4px;
// width: 35px;
// height: 35px;
// cursor: pointer;
// position: relative;
// &:before{
//     content: "";
//     background-image: url('../images/recipebyId/pick.svg');
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     display: block;
//     width: 17px;
//     height: 17px;
//     background-repeat: no-repeat;
//     background-size: cover;
//     transform: translate(-50%, -50%);
//   }
// `;

// export const IngListItemInput = styled.input`
// position: absolute;
// width: 1px;
// height: 1px;
// margin: -1px;
// border: 0px;
// padding: 0px;
// white-space: nowrap;
// clip-path: inset(100%);
// clip: rect(0px, 0px, 0px, 0px);
// overflow: hidden;
// `;