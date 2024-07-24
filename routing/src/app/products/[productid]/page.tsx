export default function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  console.log(params);
  return (
    <>
      <h1>Product Details {params.productid}</h1>
    </>
  );
}
