export default function Loader() {
  return (
    <div className={`custom-loading ${"show"}`}>
      <div className="spinner">
        <img src="/images/gwebpro_logo.png" alt="" />
        <div className="disc"></div>
      </div>
    </div>
  );
}
