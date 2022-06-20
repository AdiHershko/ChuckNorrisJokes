type appiumL = {
  accessibilityLabel?: string;
  testID?: string;
  accessible?: boolean;
};

export const applyAppiumLabel = (
  value: string,
  isButton?: boolean,
): appiumL => {
  return {
    accessibilityLabel: value,
    testID: value,
    accessible: isButton ? false : undefined,
  };
};
