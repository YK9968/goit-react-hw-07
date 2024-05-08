import { Hourglass } from "react-loader-spinner";
import css from "./Loadr.module.css";

export default function Loader() {
  return (
    <>
      <p className={css.waitMessage}>Please wait...</p>
      <Hourglass
        visible={true}
        height="30"
        width="30"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["rgb(49, 202, 123)", "rgba(49, 202, 123, 0.5)"]}
      />
    </>
  );
}
