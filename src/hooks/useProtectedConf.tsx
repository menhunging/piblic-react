import { useAppSelector } from "src/redux/store";

const useProtectedConf = () => {
  const { isConfirming, isConfirmingPhone, status } = useAppSelector(
    (state) => state.authReducers
  );

  if (isConfirming && isConfirmingPhone && status === "ok") {
    return true;
  }
};

export default useProtectedConf;
