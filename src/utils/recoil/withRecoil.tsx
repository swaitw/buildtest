import React, { ComponentType, FC } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";

type WithRecoilOptions<P> = {
  initializeState?: (mutableSnapshot: MutableSnapshot, props: P) => void;
};
const withRecoil =
  <P extends Record<string, any> = Record<string, any>>(
    options: WithRecoilOptions<P> = {}
  ) =>
  (Component: ComponentType<P>) => {
    const WithRecoil: FC<P> = (props) => {
      const { initializeState } = options;
      const getInitializeState =
        (props: P) => (mutableSnapshot: MutableSnapshot) => {
          initializeState?.(mutableSnapshot, props);
        };
      const recoilProps = initializeState
        ? { initializeState: getInitializeState(props) }
        : {};
      return (
        <RecoilRoot {...recoilProps}>
          <Component {...props} />
        </RecoilRoot>
      );
    };
    return WithRecoil;
  };

export default withRecoil;
