import styled from 'styled-components';

const CategoriesStyle = WrappedComponent => styled(WrappedComponent)`
text-align:center;
width:10%;
  .tasks{
    &__list{
      margin-top:10px;
      li{
        font-size:18px;
        margin-bottom:6px;
      }
    }
  }
`;
export default CategoriesStyle;
