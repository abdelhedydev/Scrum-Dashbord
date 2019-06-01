import styled from 'styled-components';

const ColumnStyle = WrappedComponent => styled(WrappedComponent)`
  border:1px solid black;
  width:calc(100% / 4);
  .column__title{
    font-weight:bold;
    font-size:18px;
    margin-bottom:10px;
    text-align:center;
  }
`;
export default ColumnStyle;
