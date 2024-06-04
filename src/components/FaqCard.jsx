export var FaqCard = (props) => {
  return (
    <div className={"rounded-md px-12 py-8 " + props.type}>
      <h2 className="text-3xl font-semibold ">The Best Accounting App Ever!</h2>
      <p className="text-lg">
        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris.
      </p>
    </div>
  );
};
