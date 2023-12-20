import { ScaleLoader } from "react-spinners";
import { CSSProperties } from "react";
import styled from "styled-components";

function Loader({ loading }: { loading: boolean }) {
  return (
    <LoaderContainer loading={loading}>
      <ScaleLoader
        color={"#F43630"}
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      ></ScaleLoader>
    </LoaderContainer>
  );
}

export default Loader;

// Loader 컴포넌트를 감싸는 컨테이너 스타일
const LoaderContainer = styled.div<{ loading: boolean }>`
  display: ${({ loading }) => (loading ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
